export type Language = "en" | "es" | "de";

export const translations = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About",
        "nav.addApp": "Add New App",

        // Hero
        "hero.badge": "Curated Software",
        "hero.title1": "AI Apps Built to",
        "hero.title2": "Solve Real Things.",
        "hero.subtitle": "A curated collection of practical AI tools across productivity, lifestyle, creativity and tech.",
        "hero.buttonExplore": "Explore Apps",
        "hero.buttonSubmit": "Submit New App",

        // Grid / Search
        "grid.title": "All Apps",
        "grid.subtitle": "Browse through our collection of AI-powered tools.",
        "grid.searchPlaceholder": "Search by name, description, or tags...",
        "grid.featured": "Featured",
        "grid.noResults": "No apps found matching your criteria.",
        "grid.learnMore": "Learn more",

        // Categories
        "cat.All": "All",
        "cat.Productivity": "Productivity",
        "cat.Lifestyle": "Lifestyle",
        "cat.Creative": "Creative",
        "cat.Tech": "Tech",
        "cat.Motorbike": "Motorbike",
        "cat.Wellness": "Wellness",
        "cat.Music": "Music",
        "cat.Gardening": "Gardening",
        "cat.Decision-Making": "Decision-Making",
        "cat.Fashion": "Fashion",
        "cat.Weather": "Weather",

        // App Detail
        "detail.back": "Back to all apps",
        "detail.keyFeatures": "Key Features",
        "detail.screenshot": "Application screenshot",
        "detail.launch": "Launch App",
        "detail.modify": "Modify App",
        "detail.delete": "Delete App",

        // Delete Modal
        "delete.title": "Delete",
        "delete.warning": "This action cannot be undone. Enter the admin password to confirm.",
        "delete.placeholder": "Admin Password",
        "delete.incorrect": "Incorrect password.",
        "delete.confirm": "Confirm Delete",

        // Submit Form
        "submit.title": "Admin Access Required",
        "submit.subtitle": "Platform submission is currently restricted to Turi Apps administrators.",
        "submit.passwordPlaceholder": "Enter admin password",
        "submit.unlock": "Unlock Form",
        "submit.formTitle": "Submit an App",
        "submit.appName": "App Name",
        "submit.emoji": "Emoji Icon",
        "submit.shortDescription": "Short Description",
        "submit.shortDescPlaceholder": "e.g. AI-powered transcribing tool",
        "submit.longDescription": "Long Description",
        "submit.category": "Category",
        "submit.tags": "Tags (comma separated)",
        "submit.tagsPlaceholder": "productivity, audio, ai",
        "submit.launchUrl": "Launch URL",
        "submit.screenshotUrl": "Screenshot URL (optional)",
        "submit.screenshotPlaceholder": "https://example.com/image.png",
        "submit.submitButton": "Submit App to Gallery",
        "submit.submitting": "Submitting...",
        "submit.successTitle": "App Submitted!",
        "submit.successDesc": "Your app has been successfully added to the database and is now live on the platform.",
        "submit.successButton": "Return home",

        // Footer
        "footer.desc": "A curated collection of practical AI tools across productivity, lifestyle, creativity and tech.",
        "footer.links": "Links",
        "footer.stayUpdated": "Stay Updated",
        "footer.newsletterDesc": "Get notified when new apps launch.",
        "footer.subscribe": "Subscribe",
        "footer.placeholder": "your@email.com",
        "footer.builtBy": "Built by Arturo Ordieres",
        "footer.rights": "All rights reserved.",

        // About
        "about.badge": "About",
        "about.builtBy": "Built by ",
        "about.h1": "AI & Digital Transformation",
        "about.p1": "Turi Apps is a curated collection of AI-powered tools designed to solve real, everyday problems. Each app is built with a focus on simplicity, utility, and modern design.",
        "about.p2": "From productivity and wellness to music and motorbike maintenance, these tools represent the intersection of artificial intelligence and practical needs — built to enhance daily life, not complicate it.",
        "about.p3": "This platform serves as both a portfolio and a launchpad — a foundation for a growing ecosystem of AI tools that anyone can use.",
        "about.h2": "The Vision",
        "about.p4": "Every app in this collection started with a simple question: “Can AI make this easier?” The answer, more often than not, is yes.",
        "about.p5": "The goal isn’t to build the most complex AI systems — it’s to build the most useful ones. Tools that feel natural, that fit into your workflow, and that deliver real value from the first interaction.",
    },
    es: {
        // Nav
        "nav.home": "Inicio",
        "nav.about": "Acerca de",
        "nav.addApp": "Añadir App",

        // Hero
        "hero.badge": "Software Seleccionado",
        "hero.title1": "Apps de IA para",
        "hero.title2": "Resolver Problemas Reales.",
        "hero.subtitle": "Una colección de herramientas prácticas de inteligencia artificial para productividad, estilo de vida, creatividad y tecnología.",
        "hero.buttonExplore": "Explorar Apps",
        "hero.buttonSubmit": "Publicar App",

        // Grid / Search
        "grid.title": "Todas las Apps",
        "grid.subtitle": "Explora nuestra colección de herramientas con IA.",
        "grid.searchPlaceholder": "Buscar por nombre, descripción o etiquetas...",
        "grid.featured": "Destacado",
        "grid.noResults": "No se encontraron aplicaciones con tus criterios.",
        "grid.learnMore": "Saber más",

        // Categories
        "cat.All": "Todo",
        "cat.Productivity": "Productividad",
        "cat.Lifestyle": "Estilo de Vida",
        "cat.Creative": "Creativo",
        "cat.Tech": "Tecnología",
        "cat.Motorbike": "Motociclismo",
        "cat.Wellness": "Bienestar",
        "cat.Music": "Música",
        "cat.Gardening": "Jardinería",
        "cat.Decision-Making": "Toma de Decisiones",
        "cat.Fashion": "Moda",
        "cat.Weather": "Clima",

        // App Detail
        "detail.back": "Volver a todas las apps",
        "detail.keyFeatures": "Características Principales",
        "detail.screenshot": "Captura de la aplicación",
        "detail.launch": "Abrir Aplicación",
        "detail.modify": "Modificar App",
        "detail.delete": "Eliminar App",

        // Delete Modal
        "delete.title": "Eliminar",
        "delete.warning": "Esta acción no se puede deshacer. Introduce la contraseña de administrador.",
        "delete.placeholder": "Contraseña de administrador",
        "delete.incorrect": "Contraseña incorrecta.",
        "delete.confirm": "Confirmar Eliminación",

        // Submit Form
        "submit.title": "Acceso de Administrador Requerido",
        "submit.subtitle": "El envío a la plataforma está restringido a los administradores de Turi Apps.",
        "submit.passwordPlaceholder": "Contraseña de administrador",
        "submit.unlock": "Desbloquear",
        "submit.formTitle": "Publicar una App",
        "submit.appName": "Nombre de la App",
        "submit.emoji": "Icono Emoji",
        "submit.shortDescription": "Descripción Corta",
        "submit.shortDescPlaceholder": "ej. Herramienta de transcripción por IA",
        "submit.longDescription": "Descripción Larga",
        "submit.category": "Categoría",
        "submit.tags": "Etiquetas (separadas por comas)",
        "submit.tagsPlaceholder": "productividad, audio, ia",
        "submit.launchUrl": "URL de la App",
        "submit.screenshotUrl": "URL de la captura (opcional)",
        "submit.screenshotPlaceholder": "https://ejemplo.com/imagen.png",
        "submit.submitButton": "Publicar en la Galería",
        "submit.submitting": "Enviando...",
        "submit.successTitle": "¡App Publicada!",
        "submit.successDesc": "Tu aplicación ha sido añadida a la base de datos y ya está activa en la plataforma.",
        "submit.successButton": "Volver al inicio",

        // Footer
        "footer.desc": "Una colección de herramientas prácticas de inteligencia artificial para productividad, estilo de vida, creatividad y tecnología.",
        "footer.links": "Enlaces",
        "footer.stayUpdated": "Mantente Actualizado",
        "footer.newsletterDesc": "Recibe notificaciones de nuevas apps.",
        "footer.subscribe": "Suscribirse",
        "footer.placeholder": "tu@email.com",
        "footer.builtBy": "Creado por Arturo Ordieres",
        "footer.rights": "Todos los derechos reservados.",

        // About
        "about.badge": "Acerca de",
        "about.builtBy": "Creado por ",
        "about.h1": "IA y Transformación Digital",
        "about.p1": "Turi Apps es una colección seleccionada de herramientas basadas en IA diseñadas para resolver problemas reales y cotidianos. Cada aplicación está construida con un enfoque en simplicidad, utilidad y diseño moderno.",
        "about.p2": "Desde la productividad y el bienestar hasta la música y el mantenimiento de motocicletas, estas herramientas representan la intersección de la inteligencia artificial y las necesidades prácticas: creadas para mejorar la vida diaria, no para complicarla.",
        "about.p3": "Esta plataforma sirve tanto de portafolio como de plataforma de lanzamiento: una base para un ecosistema en crecimiento de herramientas de IA que cualquiera puede usar.",
        "about.h2": "La Visión",
        "about.p4": "Cada aplicación en esta colección comenzó con una pregunta simple: “¿Puede la IA hacer esto más fácil?” La respuesta, por lo general, es sí.",
        "about.p5": "El objetivo no es construir los sistemas de IA más complejos, sino los más útiles. Herramientas que se sientan naturales, que se adapten a tu flujo de trabajo y que brinden valor real desde la primera interacción.",
    },
    de: {
        // Nav
        "nav.home": "Startseite",
        "nav.about": "Über",
        "nav.addApp": "App Hinzufügen",

        // Hero
        "hero.badge": "Kuratierte Software",
        "hero.title1": "KI-Apps zur Lösung",
        "hero.title2": "Gezielter Probleme.",
        "hero.subtitle": "Eine Sammlung von praktischen KI-Tools in Bereichen Produktivität, Lifestyle, Kreativität und Technologie.",
        "hero.buttonExplore": "Apps Entdecken",
        "hero.buttonSubmit": "Neue App Einreichen",

        // Grid / Search
        "grid.title": "Alle Apps",
        "grid.subtitle": "Durchsuchen Sie unsere Sammlung von KI-gestützten Tools.",
        "grid.searchPlaceholder": "Suchen nach Name, Beschreibung oder Tags...",
        "grid.featured": "Empfohlen",
        "grid.noResults": "Keine passenden Apps gefunden.",
        "grid.learnMore": "Mehr erfahren",

        // Categories
        "cat.All": "Alle",
        "cat.Productivity": "Produktivität",
        "cat.Lifestyle": "Lifestyle",
        "cat.Creative": "Kreativ",
        "cat.Tech": "Technologie",
        "cat.Motorbike": "Motorrad",
        "cat.Wellness": "Wellness",
        "cat.Music": "Musik",
        "cat.Gardening": "Gartenarbeit",
        "cat.Decision-Making": "Entscheidungsfindung",
        "cat.Fashion": "Mode",
        "cat.Weather": "Wetter",

        // App Detail
        "detail.back": "Zurück zu allen Apps",
        "detail.keyFeatures": "Hauptmerkmale",
        "detail.screenshot": "Screenshot der Anwendung",
        "detail.launch": "App Starten",
        "detail.modify": "App Bearbeiten",
        "detail.delete": "App Löschen",

        // Delete Modal
        "delete.title": "Löschen",
        "delete.warning": "Dies kann nicht rückgängig gemacht werden. Bitte Admin-Passwort eingeben.",
        "delete.placeholder": "Admin-Passwort",
        "delete.incorrect": "Falsches Passwort.",
        "delete.confirm": "Löschen Bestätigen",

        // Submit Form
        "submit.title": "Administratorzugriff Erforderlich",
        "submit.subtitle": "Das Einreichen ist momentan auf Turi Apps-Administratoren beschränkt.",
        "submit.passwordPlaceholder": "Admin-Passwort eingeben",
        "submit.unlock": "Freischalten",
        "submit.formTitle": "App Einreichen",
        "submit.appName": "App-Name",
        "submit.emoji": "Emoji-Symbol",
        "submit.shortDescription": "Kurzbeschreibung",
        "submit.shortDescPlaceholder": "z.B. KI-gestütztes Transkriptionstool",
        "submit.longDescription": "Lange Beschreibung",
        "submit.category": "Kategorie",
        "submit.tags": "Tags (kommagetrennt)",
        "submit.tagsPlaceholder": "produktivität, audio, ki",
        "submit.launchUrl": "App-URL",
        "submit.screenshotUrl": "Screenshot-URL (optional)",
        "submit.screenshotPlaceholder": "https://beispiel.de/bild.png",
        "submit.submitButton": "In die Galerie Einreichen",
        "submit.submitting": "Wird eingereicht...",
        "submit.successTitle": "App Eingereicht!",
        "submit.successDesc": "Ihre App wurde erfolgreich zur Datenbank hinzugefügt und ist jetzt auf der Plattform live.",
        "submit.successButton": "Zurück zur Startseite",

        // Footer
        "footer.desc": "Eine Sammlung von praktischen KI-Tools in Bereichen Produktivität, Lifestyle, Kreativität und Technologie.",
        "footer.links": "Links",
        "footer.stayUpdated": "Bleib Informiert",
        "footer.newsletterDesc": "Werde benachrichtigt, wenn neue Apps starten.",
        "footer.subscribe": "Abonnieren",
        "footer.placeholder": "deine@email.com",
        "footer.builtBy": "Erstellt von Arturo Ordieres",
        "footer.rights": "Alle Rechte vorbehalten.",

        // About
        "about.badge": "Über",
        "about.builtBy": "Erstellt von ",
        "about.h1": "KI & Digitale Transformation",
        "about.p1": "Turi Apps ist eine kuratierte Sammlung KI-gestützter Tools zur Lösung echter, alltäglicher Probleme. Jede App wurde mit Schwerpunkt auf Einfachheit, Nutzen und modernem Design entwickelt.",
        "about.p2": "Von Produktivität und Wellness bis hin zu Musik und Motorradwartung stellen diese Tools die Schnittstelle zwischen künstlicher Intelligenz und praktischen Bedürfnissen dar – entwickelt, um den Alltag zu verbessern und nicht zu verkomplizieren.",
        "about.p3": "Diese Plattform dient sowohl als Portfolio als auch als Startrampe – eine Grundlage für ein wachsendes Ökosystem von KI-Tools, die jeder nutzen kann.",
        "about.h2": "Die Vision",
        "about.p4": "Jede App in dieser Sammlung begann mit einer einfachen Frage: „Kann KI das einfacher machen?“ Die Antwort ist meistens ja.",
        "about.p5": "Das Ziel ist nicht, die komplexesten KI-Systeme zu bauen – es geht darum, die nützlichsten zu bauen. Tools, die sich natürlich anfühlen, die in Ihren Workflow passen und die ab der ersten Interaktion echten Mehrwert liefern.",
    }
} as const;

export type TranslationKey = keyof typeof translations.en;
