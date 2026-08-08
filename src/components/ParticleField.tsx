/**
 * ═══════════════════════════════════════════════════════════════
 *  ParticleField — Interactive 3D particle node-mesh background
 * ═══════════════════════════════════════════════════════════════
 */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ── INNER COMPONENT: The actual particle mesh ──────────────── */

interface ParticleMeshProps {
  density: number;
  color: string;
  opacity: number;
}

function ParticleMesh({ density, color, opacity }: ParticleMeshProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport, pointer } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(density * 3);
    for (let i = 0; i < density; i++) {
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [density]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008;
      groupRef.current.rotation.x += 0.0004;

      const targetX = pointer.y * 0.3;
      const targetY = pointer.x * 0.5;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.02;
    }

    if (pointsRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      pointsRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={density}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        
        {/* Material goes OUTSIDE of bufferGeometry, but INSIDE points */}
        <pointsMaterial
          size={0.03} 
          color={color}
          transparent={true}
          opacity={opacity}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

/* ── OUTER COMPONENT: The Canvas wrapper ────────────────────── */

interface ParticleFieldProps {
  density?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function ParticleField({
  density = 500,
  color = '#ffffff',
  opacity = 0.5,
  className = '',
}: ParticleFieldProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleMesh density={density} color={color} opacity={opacity} />
      </Canvas>
    </div>
  );
}