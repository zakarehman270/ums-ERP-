'use client'
import { usePathname } from 'next/navigation';

export default function DynamicSection() {
    const pathname = usePathname();
    const segments = pathname.split('/');

    const id = segments[2];  // Extracts the [id] part
    const section = segments[3];  // Extracts the [section] part

    return (
        <div>
            <h1>Section: {section} </h1>
        </div>
    );
}
