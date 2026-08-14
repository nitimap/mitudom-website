import Link from "next/link";
import { Container } from "@/components/container";
import { navigation, school } from "@/content/school";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <strong>{school.nameTh}</strong>
          <span>{school.nameEn}</span>
          <p>{school.tagline}</p>
        </div>
        <nav aria-label="ลิงก์ส่วนท้าย">
          <strong>ข้อมูลโรงเรียน</strong>
          {navigation.slice(0, -1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <strong>ติดต่อสอบถาม</strong>
          {school.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replaceAll("-", "")}`}>
              {phone}
            </a>
          ))}
          <a href={school.lineUrl} target="_blank" rel="noopener noreferrer">
            LINE {school.lineId}
          </a>
          <a href={school.facebookUrl} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </Container>
      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} {school.nameEn}</span>
        <span>เว็บไซต์ข้อมูลโรงเรียน</span>
      </Container>
    </footer>
  );
}

