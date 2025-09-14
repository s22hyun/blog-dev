import Image from 'next/image';

export function ProfileImage() {
    return (
        <Image
            src="/images/profile.jpeg"
            alt="시현 개발 프로필 이미지"
            width={150}
            height={150}
            className="object-cover"
        />
    );
}
