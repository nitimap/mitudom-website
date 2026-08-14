import Link from "next/link";
import { Container } from "@/components/container";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { learningPrinciples, programs, school } from "@/content/school";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">ข้ามไปยังเนื้อหาหลัก</a>
      <SiteHeader />
      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <Container className="hero-grid">
            <div className="hero-copy">
              <p className="hero-note">Mitudom Kindergarten</p>
              <h1 id="hero-title">{school.positioning}</h1>
              <p className="hero-tagline">{school.tagline}</p>
              <div className="hero-actions">
                <Link className="button" href="#contact">ติดต่อสอบถาม</Link>
                <Link className="text-link" href="#about">รู้จักโรงเรียน <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <ImagePlaceholder
              className="hero-image"
              title="ภาพ Hero ของโรงเรียน"
              detail="แนะนำภาพแนวนอน 4:3 ของพื้นที่เรียนรู้จริง"
            />
          </Container>
        </section>

        <section id="about" className="principles section" aria-labelledby="principles-title">
          <Container>
            <div className="intro-row">
              <div>
                <p className="section-label">รู้จักโรงเรียน</p>
                <h2 id="principles-title">พื้นที่ที่เข้าใจธรรมชาติของเด็ก</h2>
              </div>
              <p>
                โรงเรียนให้ความสำคัญกับพัฒนาการตามวัย การเรียนรู้ผ่านการเล่น
                และความร่วมมือระหว่างครูกับครอบครัว เพื่อให้เด็กเติบโตอย่างมีความสุขและมั่นคง
              </p>
            </div>
            <div className="principle-list">
              {learningPrinciples.map((principle, index) => (
                <article key={principle.title}>
                  <span className="principle-number" aria-hidden="true">0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="learning" className="learning section" aria-labelledby="learning-title">
          <Container className="learning-grid">
            <ImagePlaceholder
              title="ภาพการเรียนรู้ผ่านการลงมือทำ"
              detail="แนะนำภาพแนวนอน 3:2 ที่เห็นกิจกรรมและสภาพแวดล้อมจริง"
            />
            <div className="section-copy">
              <p className="section-label">แนวทางการเรียนรู้</p>
              <h2 id="learning-title">เรียนรู้จากการเล่น การลงมือทำ และประสบการณ์จริง</h2>
              <p>
                เด็กปฐมวัยเรียนรู้ได้ดีที่สุดเมื่อได้สำรวจ ตั้งคำถาม ทดลอง และค้นพบด้วยตนเอง
                ครูจึงออกแบบประสบการณ์ที่เหมาะกับวัย เปิดพื้นที่ให้เด็กคิดอย่างอิสระ
                และค่อย ๆ สร้างความมั่นใจจากสิ่งที่ทำได้จริง
              </p>
              <a className="text-link" href="#teaching">อ่านแนวทางการเรียนการสอน <span aria-hidden="true">→</span></a>
            </div>
          </Container>
        </section>

        <section id="programs" className="programs section" aria-labelledby="programs-title">
          <Container>
            <div className="section-heading-row">
              <div>
                <p className="section-label">ระดับชั้น</p>
                <h2 id="programs-title">เติบโตและเรียนรู้ไปตามช่วงวัย</h2>
              </div>
              <p>ข้อมูลอายุเป็นอายุเริ่มต้นของแต่ละระดับชั้น</p>
            </div>
            <ol className="program-path">
              {programs.map((program, index) => (
                <li key={program.name}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{program.name}</strong>
                  <small>{program.age}</small>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="teaching" className="teaching section" aria-labelledby="teaching-title">
          <Container className="teaching-grid">
            <div className="section-copy teaching-copy">
              <p className="section-label">แนวทางการเรียนการสอน</p>
              <h2 id="teaching-title">ให้ความอยากรู้อยากเห็นนำทางการเรียนรู้</h2>
              <div className="teaching-points">
                <div>
                  <h3>การเล่นคือการเรียนรู้ที่ทรงพลัง</h3>
                  <p>เด็กได้คิด ทดลอง สื่อสาร และสร้างความเข้าใจจากสิ่งที่พบด้วยตนเอง</p>
                </div>
                <div>
                  <h3>ใส่ใจในกระบวนการ ไม่เร่งผลลัพธ์</h3>
                  <p>ครูมองเห็นความแตกต่างของเด็กแต่ละคนและสนับสนุนพัฒนาการอย่างเหมาะสม</p>
                </div>
                <div>
                  <h3>เชื่อมการเรียนรู้กับชีวิตประจำวัน</h3>
                  <p>ประสบการณ์ในห้องเรียนและพื้นที่รอบตัวช่วยให้เด็กนำสิ่งที่เรียนไปใช้ได้จริง</p>
                </div>
              </div>
            </div>
            <ImagePlaceholder
              title="ภาพกิจกรรมการเรียนรู้"
              detail="แนะนำภาพแนวตั้ง 4:5 ที่ได้รับอนุญาตให้เผยแพร่"
            />
          </Container>
        </section>

        <section id="environment" className="environment section" aria-labelledby="environment-title">
          <Container>
            <div className="section-heading-row">
              <div>
                <p className="section-label">บรรยากาศการเรียนรู้</p>
                <h2 id="environment-title">ทุกพื้นที่มีส่วนในการเรียนรู้</h2>
              </div>
              <p>เตรียมพื้นที่สำหรับภาพจริงของห้องเรียน พื้นที่กลางแจ้ง และมุมกิจกรรม</p>
            </div>
            <div className="environment-strip">
              <ImagePlaceholder title="ห้องเรียน" detail="ภาพ 4:3" />
              <ImagePlaceholder title="พื้นที่กลางแจ้ง" detail="ภาพ 4:3" />
              <ImagePlaceholder title="มุมกิจกรรม" detail="ภาพ 4:3" />
            </div>
          </Container>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <Container className="contact-grid">
            <div>
              <p className="contact-note">พูดคุยกับเรา</p>
              <h2 id="contact-title">เริ่มทำความรู้จักโรงเรียนให้มากขึ้น</h2>
              <p>สอบถามข้อมูลระดับชั้นและแนวทางการเรียนรู้ได้โดยตรงกับโรงเรียน</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`tel:${school.phones[0].replaceAll("-", "")}`}>
                โทร {school.phones[0]}
              </a>
              <a className="button button-outline-light" href={school.lineUrl} target="_blank" rel="noopener noreferrer">
                LINE {school.lineId}
              </a>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

