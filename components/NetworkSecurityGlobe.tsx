"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

type Connection = {
  start: THREE.Vector3;
  end: THREE.Vector3;
  isSecure: boolean;
};

function generateSpherePoints(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
}

function ConnectionLine({ start, end, isSecure }: Connection) {
  const materialRef = useRef<THREE.LineBasicMaterial>(null!);
  const color = "#00ff88";
  const points = useMemo(() => {
    const mid = start.clone().lerp(end, 0.5).multiplyScalar(1.3);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(32);
  }, [start, end]);

  useFrame((state) => {
    if (materialRef.current) {
      const time = state.clock.elapsedTime;
      materialRef.current.opacity = isSecure
        ? 0.6 + 0.3 * Math.sin(time * 2)
        : 0.8 + 0.2 * Math.sin(time * 8);
    }
  });

  return (
    <line>
      <bufferGeometry>
        <primitive
          object={
            new THREE.BufferAttribute(
              new Float32Array(points.flatMap((p) => p.toArray())),
              3
            )
          }
          attach="attributes-position"
        />
      </bufferGeometry>
      <lineBasicMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={0.6}
      />
    </line>
  );
}

type DataPacketProps = {
  path: THREE.Vector3[];
  isSecure: boolean;
  speed: number;
};

function DataPacket({ path, isSecure, speed }: DataPacketProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const progress = useRef(0);

  useFrame((_, delta) => {
    progress.current += delta * speed;
    if (progress.current > 1) progress.current = 0;

    const i = Math.floor(progress.current * (path.length - 1));
    const next = Math.min(i + 1, path.length - 1);
    const t = (progress.current * (path.length - 1)) % 1;

    const current = path[i];
    const nextP = path[next];
    meshRef.current.position.lerpVectors(current, nextP, t);
    meshRef.current.rotation.y += delta * 4;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.02, 0]} />
      <meshBasicMaterial
        color={isSecure ? "#00ff88" : "#ff4444"}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

type NetworkNodeProps = {
  position: THREE.Vector3;
  isSecure: boolean;
  size?: number;
};

function NetworkNode({ position, isSecure, size = 0.03 }: NetworkNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.y = time * 0.5;

    const scale = 1 + 0.3 * Math.sin(time * 3);
    ringRef.current.scale.setScalar(scale);
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.5 - 0.2 * Math.sin(time * 3);
  });

  return (
    <group position={position.toArray()}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 1]} />
        <meshBasicMaterial color={isSecure ? "#00ff88" : "#ff4444"} />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[size * 1.5, size * 2, 8]} />
        <meshBasicMaterial
          color={isSecure ? "#00ff88" : "#ff4444"}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

type ThreatProps = {
  position: THREE.Vector3;
};

function ThreatIndicator({ position }: ThreatProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const scale = 1 + 0.5 * Math.sin(time * 6);
    meshRef.current.scale.setScalar(scale);
    (meshRef.current.material as THREE.Material).opacity =
      0.7 + 0.3 * Math.sin(time * 6);
  });

  return (
    <mesh ref={meshRef} position={position.toArray()}>
      <octahedronGeometry args={[0.04, 0]} />
      <meshBasicMaterial color="#ff2244" transparent />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < 1000; i++) {
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
      colors.push(0, Math.random() * 0.5 + 0.5, Math.random() * 0.3 + 0.7);
    }

    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => generateSpherePoints(20, 2), []);
  const threats = useMemo(() => generateSpherePoints(5, 2.1), []);

  const connections: Connection[] = useMemo(() => {
    const conns: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.5 && Math.random() > 0.7) {
          conns.push({
            start: nodes[i],
            end: nodes[j],
            isSecure: Math.random() > 0.2,
          });
        }
      }
    }
    return conns;
  }, [nodes]);

  useFrame((state) => {
    globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial
          color="#003366"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {connections.map((conn, i) => (
        <ConnectionLine key={i} {...conn} />
      ))}

      {nodes.map((node, i) => (
        <NetworkNode key={i} position={node} isSecure={Math.random() > 0.15} />
      ))}

      {connections.slice(0, 8).map((conn, i) => (
        <DataPacket
          key={i}
          path={[conn.start, conn.end]}
          isSecure={conn.isSecure}
          speed={0.5 + Math.random() * 0.5}
        />
      ))}

      {threats.map((threat, i) => (
        <ThreatIndicator key={i} position={threat} />
      ))}
    </group>
  );
}

export default function NetworkSecurityGlobe() {
  return (
    <div
      style={{
        width: "500px",
        height: "600px",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />

        <ParticleField />
        <Globe />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}
