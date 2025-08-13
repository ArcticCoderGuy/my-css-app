# 🧑‍💻 My CSS App – Vite + React + Material-UI

> **EduNord-ohjelmointitehtävä:** Moderni React-sovelluskehitys alusta loppuun

---

## 📚 Sisällysluettelo
1. [Projektin alustus](#-vaihe-1-projektin-alustus)
2. [MUI-integraatio](#-vaihe-2-mui-integraatio)
3. [Teknologiat](#-teknologiat)
4. [Käynnistys](#-käynnistys)

---

## 🚀 Vaihe 1: Projektin alustus

### 📦 Projektin luonti Vitellä

```bash
# Luodaan React-projekti
npm create vite@latest my-css-app -- --template react

# Git-repositorion alustus
git init
git add .
git commit -m "Initial commit with Vite + React"
git branch -M main
git remote add origin https://github.com/ArcticCoderGuy/my-css-app.git
git push -u origin main
```

### 📁 Komponenttihakemiston luonti

```bash
# Luodaan Components-kansio
mkdir src/Components
cd src/Components
touch UserCard.jsx UserCard.module.css
```

**Tulos:**
```
📂 src/Components/
├── 📄 UserCard.jsx
└── 🎨 UserCard.module.css
```

### ✨ Ensimmäinen versio
- ✅ Luotu käyttäjäkorttikomponentti
- ✅ Lisätty kolme testikäyttäjää (Anna, Mikko, Liisa)
- ✅ CSS Modules -tyylitys
- ✅ Kaikki toimii ja näkyy!

---

## 🎨 Vaihe 2: MUI-integraatio

### 📦 Material-UI asennus

```bash
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 🔄 Komponenttien refaktorointi

#### **Ennen:** Staattinen UserCard
```
📄 UserCard.jsx       → Yksinkertainen kortti
🎨 UserCard.module.css → CSS Modules -tyylit
```

#### **Jälkeen:** Interaktiivinen EmployeeCard
```
📄 EmployeeCard.jsx   → MUI Accordion-komponentti
❌ CSS-tiedostot      → Poistettu (MUI hoitaa tyylit)
```

### 🏗️ Tekninen toteutus

#### **1. Komponenttirakenne**
```javascript
import { Accordion, AccordionSummary, AccordionDetails, Avatar, Typography, Box, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
```

| Osa | Tehtävä |
|-----|---------|
| **AccordionSummary** | Näyttää avatarin + nimen |
| **AccordionDetails** | Sisältää lisätiedot |
| **useState** | Hallitsee avaus/sulku-tilaa |

#### **2. Laajennettu data-malli**
```javascript
const user = {
  name: "Anna Virtanen",
  email: "anna@example.com",
  title: "Frontend Developer",    // 🆕 Uusi
  department: "IT",                // 🆕 Uusi
  phone: "+358 40 123 4567",      // 🆕 Uusi
  image: "https://randomuser.me/..."
}
```

#### **3. App.jsx päivitys**
```javascript
// ❌ Vanha
import UserCard from './Components/UserCard';

// ✅ Uusi
import EmployeeCard from './Components/EmployeeCard';
```

### 📊 Lopputulos

| Ominaisuus | Status |
|------------|--------|
| Accordion-toiminto | ✅ Toimii |
| Avatar-kuvat | ✅ Näkyy |
| Työntekijätiedot | ✅ Kaikki kentät |
| Responsiivisuus | ✅ Grid-layout |
| Material Design | ✅ Moderni ulkoasu |

---

## 🛠️ Teknologiat

| Teknologia | Versio | Käyttötarkoitus |
|------------|---------|-----------------|
| **React** | 18.x | UI-kirjasto |
| **Vite** | 5.x | Build-työkalu |
| **Material-UI** | 5.x | Komponenttikirjasto |
| **Emotion** | 11.x | CSS-in-JS |

---

## 🚦 Käynnistys

### Kehitysympäristö
```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npm run dev
```

🌐 **Sovellus käynnistyy:** [http://localhost:5173](http://localhost:5173)

### Tuotantoversio
```bash
# Luo tuotantoversio
npm run build

# Esikatsele tuotantoversiota
npm run preview
```

---

## 📈 Projektin tila

### ✅ Valmiit ominaisuudet
- [x] React-projektin alustus
- [x] Material-UI integraatio
- [x] Accordion-komponentit
- [x] Responsiivinen layout
- [x] Työntekijätietojen hallinta

### 🔮 Mahdolliset jatkokehityskohteet
- [ ] Tietokantaintegraatio
- [ ] Hakutoiminnot
- [ ] Suodatusominaisuudet
- [ ] Työntekijöiden lisäys/poisto
- [ ] Dark mode -tuki

---

## 👨‍💻 Tekijä

**EduNord-ohjelmointikurssi 2025**

> 💡 *"Oppiminen tapahtuu tekemällä"*

---

### 📝 Lisenssi
MIT © 2025