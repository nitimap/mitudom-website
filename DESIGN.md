---
name: Mitudom Kindergarten
description: อบอุ่น ไว้วางใจได้ และเชี่ยวชาญด้านการศึกษาปฐมวัย
colors:
  deep-trust-navy: "#062B57"
  lotus-blue: "#087FE5"
  action-blue: "#0769C3"
  gentle-sky: "#E8F4FF"
  clear-white: "#FFFFFF"
  ink: "#172A3A"
  muted: "#4D6476"
  caring-pink: "#D95B88"
  caring-pink-text: "#A93460"
  soft-line: "#C9DCEB"
  focus-gold: "#FFBF47"
typography:
  display:
    fontFamily: "Anuphan, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Anuphan, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.22
  title:
    fontFamily: "Anuphan, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Anuphan, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Anuphan, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lotus-blue}"
    textColor: "{colors.clear-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.clear-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
  image-placeholder:
    backgroundColor: "{colors.gentle-sky}"
    textColor: "{colors.action-blue}"
    rounded: "{rounded.md}"
    padding: "32px"
---

# Design System: Mitudom Kindergarten

## Overview

**Creative North Star: “A Caring Teacher’s Welcome” — การต้อนรับอย่างใส่ใจจากคุณครู**

หน้าเว็บรู้สึกเหมือนคุณครูกำลังพาผู้ปกครองทำความรู้จักโรงเรียนผ่านภาพถ่ายจริงและคำอธิบายที่ชัดเจน โครงสร้างโปร่ง สงบ และอ่านง่าย แต่มีลำดับที่มั่นคงพอจะสะท้อนความเชี่ยวชาญด้านเด็กปฐมวัย

ระบบใช้พื้นที่ว่างและแถบสีเต็มความกว้างสร้างจังหวะก่อนใช้กล่องหรือเงา ส่วนสำคัญสลับระหว่างภาพกับข้อความเพื่อให้ภาพจริงของโรงเรียนเป็นหลักฐาน ไม่ใช่ของตกแต่ง หน้าแรกใช้ข้อมูลที่คงอยู่ได้นานและพาไปสู่การติดต่อสอบถามโดยไม่สร้างภาระข่าวหรือกิจกรรมที่ต้องอัปเดต

**Key Characteristics:**

- อบอุ่นโดยไม่ดูเด็กเกินไป
- เชี่ยวชาญโดยไม่เคร่งขรึมหรือห่างเหิน
- ภาพจริงนำ ข้อมูลจริงสนับสนุน
- เนื้อหาสั้น เป็น hook และอ่านง่ายบนมือถือ
- ใช้โลโก้หนึ่งครั้งใน header
- ใช้การเคลื่อนไหวเฉพาะ feedback และเมนู

## Colors

สีหลักมาจากโลโก้และใช้แบบ Full Palette ที่สงบ น้ำเงินเข้มสร้างความน่าเชื่อถือ ฟ้าเป็นสีการกระทำ ฟ้าอ่อนสร้างพื้นที่พักสายตา และชมพูทำหน้าที่เป็นรายละเอียดขนาดเล็ก

### Primary

- **Deep Trust Navy:** ข้อความหัวเรื่อง header และ footer
- **Lotus Blue:** ปุ่มหลัก ลิงก์ และส่วนเชื่อมโยงกับแบรนด์
- **Action Blue:** สถานะ hover พื้น CTA และข้อความลิงก์ที่ต้องผ่าน contrast

### Secondary

- **Caring Pink:** เส้นและจุดตกแต่งเท่านั้น ไม่เกิน 5–8% ของหน้า
- **Caring Pink Text:** ตัวเลขหรือข้อความเล็กที่ต้องการชมพูแต่ต้องอ่านได้ชัด

### Neutral

- **Clear White:** พื้นหลัก
- **Gentle Sky:** พื้น section และ image placeholder
- **Ink:** ข้อความยาว
- **Muted:** ข้อความสนับสนุน
- **Soft Line:** เส้นแบ่งและขอบ placeholder
- **Focus Gold:** focus ring ที่มองเห็นได้บนพื้นสว่างและเข้ม

**The Calm Full-Palette Rule.** ทุกสีต้องมีหน้าที่ ห้ามใช้ทุกสีแข่งขันกันในบริเวณเดียว

**The Pink Detail Rule.** Caring Pink ใช้กับเส้นและรายละเอียดเท่านั้น ข้อความเล็กต้องใช้ Caring Pink Text ที่เข้มกว่า

**The Contrast Before Identity Rule.** เมื่อสีโลโก้ไม่ผ่าน contrast สำหรับข้อความ ให้ใช้ tonal variant ที่เข้มขึ้นโดยไม่เปลี่ยนบุคลิกแบรนด์

## Typography

**Display Font:** Anuphan Bold

**Body Font:** Anuphan Regular

**Character:** Anuphan เป็น sans ภาษาไทยที่มีน้ำเสียงเป็นมนุษย์ อ่านง่าย และรองรับไทยกับอังกฤษในครอบครัวเดียว ระบบใช้สามน้ำหนักหลักเพื่อจำกัดไฟล์ฟอนต์และรักษาความสม่ำเสมอ

### Hierarchy

- **Display:** น้ำหนัก 700 ขนาด fluid สูงสุด 3.75rem ใช้กับ H1 เพียงครั้งเดียว และจำกัดความยาวประมาณ 20ch
- **Headline:** น้ำหนัก 700 ขนาด fluid สูงสุด 3.1rem ใช้กับ H2 และจำกัดประมาณ 19–24ch
- **Title:** น้ำหนัก 700 ขนาด 1.08–1.2rem ใช้กับ H3
- **Body:** น้ำหนัก 400 ขนาด 1rem ระยะบรรทัด 1.65 และจำกัดข้อความยาวไม่เกิน 57–62ch
- **Label:** น้ำหนัก 700 ขนาด 0.95rem ใช้กับปุ่ม เมนู และป้ายหัวข้อ

**The One Friendly Voice Rule.** ใช้ Anuphan เพียงครอบครัวเดียว ความแตกต่างต้องมาจากขนาด น้ำหนัก และพื้นที่ว่าง

**The Readable Small Text Rule.** ข้อความที่มีความหมายห้ามเล็กกว่า 0.875rem; ค่าที่เล็กกว่านี้อนุญาตเฉพาะตัวเลขตกแต่งที่ซ่อนจาก screen reader

## Elevation

ระบบแบนเป็นค่าเริ่มต้นและใช้สี พื้นที่ว่าง และเส้นแบ่งสร้างลำดับ เมนูมือถือเป็นองค์ประกอบเดียวที่ใช้เงาเพื่อแยกชั้นจาก backdrop ปุ่มใช้การเลื่อนขึ้น 2px เมื่อ hover แต่ไม่มีเงากว้าง

**The Flat-by-Default Rule.** ห้ามใช้เส้นขอบ 1px คู่กับเงาฟุ้งขนาดใหญ่ และห้ามทำให้ทุก section ดูลอยเหนือหน้า

**The Overlay-Only Shadow Rule.** เงาใช้กับ mobile menu overlay เท่านั้นจนกว่าจะมี component ที่ต้องยกชั้นจริง

## Components

### Buttons

- **Shape:** มุมโค้ง 8px พื้นที่กดสูงอย่างน้อย 48px
- **Primary:** Lotus Blue บน Clear White; hover เปลี่ยนเป็น Action Blue และยกขึ้น 2px
- **Light:** Clear White บน Action Blue สำหรับ CTA พื้นเข้ม
- **Focus:** เส้น Focus Gold หนา 3px และเว้นขอบ 3px

### Cards / Containers

- ไม่ใช้ card เป็นค่าเริ่มต้น เนื้อหาจัดกลุ่มด้วยพื้นที่ว่างและเส้นแบ่ง
- หลักการเรียนรู้ใช้ editorial columns
- ระดับชั้นใช้รายการแนวตั้งบนมือถือ/แท็บเล็ต และเส้นทางห้าคอลัมน์เมื่อพื้นที่กว้างพอ

### Image Placeholders

- พื้น Gentle Sky ขอบ Soft Line มุม 14px
- ระบุประเภทภาพ อัตราส่วน และสิทธิ์ใช้งานที่ต้องเตรียม
- เมื่อเปลี่ยนเป็นภาพจริงต้องใช้ `next/image`, กำหนด `sizes`, และเขียน alt text จากสิ่งที่เห็นจริง

### Navigation

- Header สูง 76px และ sticky บนพื้นขาวทึบ
- Desktop แสดงเมนูเมื่อกว้างอย่างน้อย 70rem
- Mobile menu เป็น panel เต็มความสูง ล็อก background scroll ปิดด้วย Escape และคืน focus ให้ trigger
- โลโก้ปรากฏเฉพาะ header หนึ่งครั้ง Footer ใช้ชื่อโรงเรียนแบบข้อความ

### Sections

- ระยะ section หลัก fluid 64–112px
- ส่วนแนวทางการเรียนการสอนได้พื้นที่มากที่สุด 80–128px
- ส่วนบรรยากาศเป็น hook ที่กระชับกว่า 56–80px
- alternating white/sky surfaces สร้างจังหวะโดยไม่พึ่งการ์ด

## Do's and Don'ts

### Do:

- **Do** ใช้ภาพจริงของโรงเรียนที่ได้รับอนุญาตและผ่านการตรวจสอบความเป็นส่วนตัว
- **Do** จัดเนื้อหาเหมือนคุณครูอธิบายให้ผู้ปกครองฟังอย่างเป็นลำดับ
- **Do** ใช้น้ำเงิน ฟ้า และขาวเป็นแกน และให้ชมพูเป็นรายละเอียดขนาดเล็ก
- **Do** ใช้ placeholder ที่บอกประเภทและสัดส่วนรูปจนกว่าจะมีภาพจริง
- **Do** รักษาพื้นที่กดอย่างน้อย 44×44px และ visible focus ทุก interaction
- **Do** ให้ mobile/tablet ใช้รายการระดับชั้นแนวตั้ง และเปลี่ยนเป็นห้าคอลัมน์เมื่อกว้างอย่างน้อย 70rem

### Don't:

- **Don't** ใช้ภาพลักษณ์ที่เป็นการ์ตูนหรือดูเด็กเกินไป
- **Don't** ใช้สีฉูดฉาดหรือองค์ประกอบจำนวนมากจนวุ่นวาย
- **Don't** ทำให้เว็บไซต์เคร่งขรึม เป็นทางการ หรือห่างเหิน
- **Don't** ทำให้เว็บไซต์ดูเหมือนเว็บไซต์เพื่อความบันเทิงเด็กด้วยการ์ตูน สีสดหลายสี ตัวอักษรหลายแบบ หรือองค์ประกอบขยับจำนวนมาก
- **Don't** ใช้ภาพเด็กจากอินเทอร์เน็ต ภาพบุคคลที่ไม่มีสิทธิ์ใช้งาน หรือภาพที่สร้างให้ดูเหมือนเป็นนักเรียนจริงของโรงเรียน
- **Don't** ใช้ภาพโรงเรียนหรือนักเรียนก่อนตรวจสอบสิทธิ์ ความยินยอม ความเป็นส่วนตัว และการอนุมัติเผยแพร่
- **Don't** ใช้โลโก้ซ้ำใน hero, CTA, body หรือ footer
- **Don't** สร้างข่าวหรือกิจกรรมล่าสุดที่ต้องอัปเดตเป็นประจำ
- **Don't** ใช้เส้นชมพูใต้หัวข้อทุก section; สงวนไว้ที่ hero และ CTA เท่านั้น
- **Don't** ใช้ carousel, วิดีโอพื้นหลัง, gradient text, glassmorphism หรือ identical card grids
