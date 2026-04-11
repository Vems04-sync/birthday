# 🎵 Audio File Instructions

Folder ini adalah tempat menyimpan file audio untuk musik background website.

## 📝 Setup Audio

### Opsi 1: Download dari YouTube (Recommended)

1. **Visit YouTube video:** https://youtu.be/Trjrj_fQnIM?si=VCH7W6KNP1LxLtpH

2. **Download audio menggunakan salah satu tool:**
   - **Online Tool**: yt-dlp.org atau youtube2mp3.cc
   - **Desktop App**: 4K Video Downloader atau FreemakeVideoConverter
   - **Command Line**: 
     ```bash
     yt-dlp -x --audio-format mp3 "https://youtu.be/Trjrj_fQnIM"
     ```

3. **Rename file menjadi:** `birthday-music.mp3`

4. **Simpan di folder ini** (assets/audio/)

5. **Refresh website** - musik akan terdengar!

### Opsi 2: Gunakan Audio File Lain

Simpan file audio apapun dengan nama: `birthday-music.mp3`

Format yang supported:
- ✅ MP3 (recommended)
- ✅ WAV
- ✅ OGG
- ✅ M4A

### Opsi 3: Ubah Nama File

Jika ingin gunakan nama file berbeda, edit `index.html`:

```html
<source src="assets/audio/NAMA-FILE-ANDA.mp3" type="audio/mpeg">
```

## ✅ Verification

Setelah file audio ditambahkan:
1. Buka `index.html` di browser
2. Klik tombol page (trigger unmute)
3. Suara musik harusnya terdengar ✅

## 🔧 Audio Behavior

- 🎵 **Autoplay**: Musik mulai otomatis saat page load
- 🔇 **Muted initially**: Muted karena browser autoplay policy
- ▶️ **Unmute on interaction**: Otomatis unmute saat user klik/keyboard
- 🔁 **Loop**: Musik loop otomatis saat habis
- 🔊 **Volume**: 40% (bisa adjust di script.js line ~49)

## 📊 Recommended Audio Specs

- **Format**: MP3 (best compatibility)
- **Duration**: 3-5 menit (untuk loop smooth)
- **Bitrate**: 128-256 kbps (balance quality & size)
- **File Size**: < 10MB (untuk fast load)

## 🆘 Troubleshooting

**Musik tidak terdengar?**
1. Check browser console (F12) untuk error
2. Verify file path: `assets/audio/birthday-music.mp3`
3. Check file exists di folder ini
4. Try refresh browser (Ctrl+Shift+R hard refresh)

**Browser says file not found (404)?**
1. Check spelling - nama file harus exact
2. Folder `audio` harus ada di `assets/`
3. File harus format MP3, WAV, OGG, atau M4A

**Audio terputus-putus?**
1. File terlalu besar - kompres mp3
2. File corrupt - download ulang
3. Browser issue - try browser lain

## 📚 Legal Note

- ✅ MengDownload audio untuk personal use (birthday greeting) = legal
- ✅ Gunakan untuk event pribadi = legal
- ❌ Jangan gunakan untuk commercial/profit = illegal
- ❌ Jangan claim sebagai creative work Anda = plagiarism

Respect creator rights!

## 🎯 Quick Steps Summary

```
1. Download audio dari YouTube
2. Rename menjadi: birthday-music.mp3
3. Simpan ke: assets/audio/
4. Refresh website
5. Done! 🎉
```

---

**Happy Birthday Celebrations! 🎊💖**
