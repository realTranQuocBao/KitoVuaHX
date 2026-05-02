# CLAUDE.md – Project Context: KitoVuaHX

## Git
- Branch: `claude/create-youth-landing-page-dAvgF`
- Repo: `realTranQuocBao/KitoVuaHX`
- Push: `git push -u origin claude/create-youth-landing-page-dAvgF`

## Năm hiện tại
2026

## Tên chuẩn (KHÔNG dùng "Kito Vua" hay "Hàng Sanh")
- Giáo xứ: **Giáo xứ Hàng Sanh**
- Xứ đoàn (đầy đủ): **Xứ đoàn Thiếu nhi Thánh Thể Kitô Vua**
- Xứ đoàn (viết tắt): **Xứ đoàn TNTT Kitô Vua Hàng Sanh**
- Tên ngắn trong navbar/logo: **Kitô Vua**

## Cấu trúc files
| File | Mục đích |
|------|----------|
| `index.html` | Trang chủ giới thiệu xứ đoàn |
| `style.css` | CSS cho index.html |
| `script.js` | JS cho index.html (navbar, particles, counter, scroll-reveal) |
| `hoithao.html` | Trang sự kiện Hội Thao 2026 |
| `hoithao.css` | CSS cho hoithao.html |
| `hoithao-script.js` | JS cho hoithao.html (tabs, scroll-reveal, round tracker) |
| `bracket-v1.html` | Sơ đồ thi đấu V1: ngang, dark theme, SVG bezier |
| `bracket-v2.html` | Sơ đồ thi đấu V2: dọc, tabbed, light colorful |
| `bracket-v3.html` | Sơ đồ thi đấu V3: 3 cột song song, minimal |

## Thông tin ngành (6 ngành + lãnh đạo)
| Ngành | Viết tắt | Tuổi | Khăn | Thánh giá | Khẩu hiệu |
|-------|----------|------|------|-----------|-----------|
| Chiên Con | CC | 3–6 | Hồng | Vàng | Hiền Lành |
| Ấu Nhi | Ấu | 6–9 | Xanh mạ | Vàng | Ngoan |
| Thiếu Nhi | Thiếu | 10–12 | Xanh dương | Vàng | Hy Sinh |
| Nghĩa Sĩ | Nghĩa | 13–15 | Vàng | Đỏ | Dấn Thân |
| Hiệp Sĩ | Hiệp | 16–17 | Nâu | Vàng | Chinh Phục |
| Huynh Trưởng | HT | 18+ | Đỏ + viền vàng | Vàng | Phụng Sự |
| Dự Trưởng | DT | 18+ | Đỏ (không viền) | Vàng | Phụng Sự |
| Trợ uý | — | — | Đỏ + viền trắng | Trắng | Nhiệt Thành |
| Linh mục tuyên uý | — | — | Trắng + viền vàng | Vàng | — |

## Lịch thi đấu Hội Thao 2026
6 Chủ Nhật liên tiếp, sau lễ sáng. 3 ngành thi đấu:

| Ngành | Giờ | Vòng loại (A/B/C) | Bán kết (D/E) | Chung kết |
|-------|-----|-------------------|---------------|-----------|
| Ấu Nhi | 10:35–10:50 | A:1a-1b, B:2a-2b, C:3a-3b | D:W(A)-?, E:W(B)-W(C) | W(D)-W(E) |
| Thiếu Nhi | 10:55–11:10 | A:1a-1b, B:2a-2b, C:3a-3b | D:2c-W(C), E:W(A)-W(B) | W(D)-W(E) |
| Nghĩa–Hiệp | 11:15–11:30 | A:1a-1b, B:2a-2b, C:N3-Hiệp | D:W(A)-?, E:W(B)-W(C) | W(D)-W(E) |

Lớp 2C (Thiếu Nhi) được vào thẳng bán kết (lucky draw).

## CSS theme
- **index.html**: Navy/Gold — `--navy:#0a1628`, `--gold:#c9860a`, `--gold-light:#f0c040`
- **hoithao.html**: Green/Navy sports — `--vl:#16a34a` (vòng loại), `--bk:#d97706` (bán kết), `--ck:#dc2626` (chung kết)
- Fonts: Playfair Display (headings) + Nunito (body) từ Google Fonts

## Các ID/class quan trọng trong index.html
- Sections: `#home`, `#about`, `#doanthe`, `#giaoly`, `#hoatdong`, `#sukien`, `#tintuc`, `#lienhe`
- Ngành grid: `.doanthe-grid` — 3 cột desktop, 2 cột tablet, 1 cột mobile
- Event banner: `.sukien-banner` → link đến `hoithao.html`
- Nav event link: `.nav-event-link` (gold pulsing animation)

## Bracket V1 — cấu trúc kết nối (SVG bezier)
Match IDs: `au-A..au-CK`, `th-A..th-CK`, `ng-A..ng-CK`

Edges Ấu Nhi: A→D, B→E, C→E, D→CK, E→CK  
Edges Thiếu Nhi: A→E, B→E, C→D (special/lucky), D→CK, E→CK  
Edges Nghĩa–Hiệp: A→D, C→E, D→E, D→CK (special), E→CK
