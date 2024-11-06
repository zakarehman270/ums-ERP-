'use client'
import { usePathname } from 'next/navigation';

export default function SubSection() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const section = segments[3];  // Extracts the [section] part // Capture all dynamic parameters

    return (
        <div>
            <h2> hello2  {section} == {segments[4]} </h2>
        </div>
    );
}
