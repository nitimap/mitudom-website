import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { MobileNavigation } from "@/components/mobile-navigation";
import { navigation, school } from "@/content/school";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand" href="#top" aria-label={`${school.nameTh} หน้าแรก`}>
          <Image
            src="/brand/mitudom-logo.png"
            alt=""
            width={52}
            height={52}
            priority
          />
          <span>
            <strong>{school.nameTh}</strong>
            <small>{school.nameEn}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {navigation.slice(0, -1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small" href="#contact">
            ติดต่อสอบถาม
          </Link>
        </nav>
        <MobileNavigation items={navigation} />
      </Container>
    </header>
  );
}

