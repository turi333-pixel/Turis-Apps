import { App } from "@/lib/types";
import { seedApps } from "@/lib/apps-data";
import { Language } from "./translations";

type AppTranslation = Partial<App>;

const esTranslations: Record<string, AppTranslation> = {
    "transcribe": {
        name: "Transcribir",
        shortDescription: "Transcripción de audio en vivo con resúmenes inteligentes y puntos de acción.",
        longDescription: "Escucha audio en vivo o grabaciones subidas y genera transcripciones precisas. Proporciona automáticamente un resumen limpio y extrae elementos procesables. Ideal para reuniones, talleres y notas de voz.",
        features: ["Transcripción de audio en tiempo real", "Generación automática de resúmenes", "Extracción de elementos procesables", "Sube grabaciones o usa micrófono en vivo", "Salida limpia y exportable"],
        tags: ["transcripción", "audio", "productividad", "reuniones"],
    },
    "voguefit-ai": {
        name: "Voguefit AI",
        shortDescription: "Prueba virtual — mira cómo te quedan los conjuntos con IA.",
        longDescription: "Sube tu foto y pruébate ropa virtualmente para ver cómo te quedan los conjuntos antes de comprar. Un probador virtual rápido y realista impulsado por IA.",
        features: ["Sube cualquier foto tuya", "Prueba virtual impulsada por IA", "Renderizado realista de prendas", "Prueba múltiples conjuntos rápidamente", "Guarda y compara looks"],
        tags: ["moda", "prueba virtual", "ia", "estilo de vida"],
    },
    "moodflow": {
        name: "MoodFlow",
        shortDescription: "Rastrea tu estado de ánimo y visualiza patrones emocionales con el tiempo.",
        longDescription: "Rastrea tu estado de ánimo diario y estado mental. Visualiza patrones emocionales semanales y recibe consejos personalizados para mejorar el equilibrio y la claridad.",
        features: ["Registro diario de estado de ánimo", "Visualización de patrones semanales", "Consejos personalizados", "Diario integrado", "Seguimiento de progreso"],
        tags: ["bienestar", "estado de ánimo", "salud mental", "diario"],
    },
    "bike-trip-planner": {
        name: "Planificador Moto",
        shortDescription: "Planifica paseos en moto con mapas de clima y elevación.",
        longDescription: "Diseña la ruta perfecta en moto analizando el terreno de la carretera, los pronósticos del clima a lo largo de la ruta y evitando segmentos peligrosos.",
        features: ["Planificación de rutas", "Integración de clima", "Perfil de elevación", "Evitar peligros", "Comparte tu ruta"],
        tags: ["moto", "viaje", "clima", "mapa"],
    },
    "focus-beat": {
        name: "Ritmo Foco",
        shortDescription: "Música generada por IA para concentración profunda.",
        longDescription: "Crea música de fondo infinita y sin distracciones adaptada a tu estado de trabajo actual. Ya sea programando, escribiendo o estudiando, Focus Beat mantiene tu flujo.",
        features: ["Música infinita", "Pistas generadas por IA", "Ajustes según actividad", "Sin distracciones", "Mejora del enfoque"],
        tags: ["productividad", "música", "enfoque", "sonido"],
    },
    "growlab-bot": {
        name: "Bot GrowLab",
        shortDescription: "Diagnóstico de plantas impulsado por IA y planes de cuidado.",
        longDescription: "Toma una foto de tu planta enferma y obtén un diagnóstico inmediato e instrucciones paso a paso sobre cómo revivirla. Hace un seguimiento del crecimiento a lo largo del tiempo.",
        features: ["Diagnóstico por foto", "Planes de cuidado paso a paso", "Seguimiento de crecimiento", "Alertas de riego", "Base de datos de plantas"],
        tags: ["jardinería", "plantas", "cuidado", "hogar"],
    },
    "debate-pro": {
        name: "Debate Pro",
        shortDescription: "Practica tus habilidades argumentativas contra un oponente de IA.",
        longDescription: "Afila tus habilidades de pensamiento crítico debatiendo con una IA en diversos temas. Recibe comentarios sobre tu lógica, técnica de persuasión y detección de falacias.",
        features: ["Debate en tiempo real", "Comentarios de lógica", "Detección de falacias", "Múltiples temas", "Mejora de argumentos"],
        tags: ["educación", "debate", "habilidades", "lógica"],
    },
    "pixel-restore": {
        name: "Restaurar Pixel",
        shortDescription: "Restauración y mejora instantánea de fotos antiguas.",
        longDescription: "Da vida a viejas fotos familiares. Sube fotos escaneadas borrosas, en blanco y negro o dañadas, y míralas restauradas, coloreadas y mejoradas a alta resolución.",
        features: ["Coloreado", "Eliminación de arañazos", "Mejora a 4K", "Procesamiento por lotes", "Almacenamiento seguro"],
        tags: ["fotografía", "restauración", "ia", "creativo"],
    },
    "chef-vision": {
        name: "Chef Visión",
        shortDescription: "Ingresa lo que hay en tu nevera, obtén recetas gourmet.",
        longDescription: "Toma una foto de los ingredientes sobrantes en tu refrigerador, y Chef Vision generará recetas gourmet paso a paso utilizando solo lo que tienes.",
        features: ["Reconocimiento de ingredientes", "Recetas paso a paso", "Información nutricional", "Alergias ajustables", "Guardar favoritos"],
        tags: ["comida", "cocina", "recetas", "estilo de vida"],
    },
    "finance-whisperer": {
        name: "Susurrador Financiero",
        shortDescription: "Analiza tus hábitos de gasto e identifica ahorros.",
        longDescription: "Conecta tus extractos bancarios y deja que la IA analice exactamente a dónde va tu dinero. Obtén consejos procesables para reducir suscripciones y ahorrar más.",
        features: ["Análisis de gastos", "Alertas de suscripción", "Consejos de ahorro", "Cifrado seguro", "Metas de presupuesto"],
        tags: ["finanzas", "dinero", "ahorros", "herramienta"],
    },
};

const deTranslations: Record<string, AppTranslation> = {
    "transcribe": {
        name: "Transkribieren",
        shortDescription: "Live-Audio-Transkription mit intelligenten Zusammenfassungen.",
        longDescription: "Hört Live-Audio oder hochgeladene Aufnahmen an und erstellt genaue Transkriptionen. Bietet automatisch eine saubere Zusammenfassung und extrahiert Handlungspunkte. Ideal für Meetings, Workshops und Sprachnotizen.",
        features: ["Echtzeit-Audio-Transkription", "Automatische Zusammenfassung", "Extraktion von Handlungspunkten", "Aufnahmen hochladen oder Live-Mikro", "Saubere, exportierbare Ausgabe"],
        tags: ["transkription", "audio", "produktivität", "meetings"],
    },
    "voguefit-ai": {
        name: "Voguefit AI",
        shortDescription: "Virtuelles Anprobieren — sehen Sie, wie Outfits an Ihnen aussehen.",
        longDescription: "Laden Sie Ihr Foto hoch und probieren Sie Kleidung virtuell an, um zu sehen, wie Outfits vor dem Kauf aussehen. Eine schnelle und realistische KI-gestützte virtuelle Umkleidekabine.",
        features: ["Eigenes Foto hochladen", "KI-gestützte virtuelle Anprobe", "Realistisches Kleidungs-Rendering", "Mehrere Outfits schnell testen", "Looks speichern und vergleichen"],
        tags: ["mode", "virtuelle anprobe", "ki", "lifestyle"],
    },
    "moodflow": {
        name: "MoodFlow",
        shortDescription: "Verfolgen Sie Ihre Stimmung und visualisieren Sie emotionale Muster.",
        longDescription: "Verfolgen Sie Ihre tägliche Stimmung und Ihren mentalen Zustand. Visualisieren Sie wöchentliche emotionale Muster und erhalten Sie personalisierte Tipps zur Verbesserung der Balance.",
        features: ["Tägliches Stimmungs-Tracking", "Wochentrend-Visualisierung", "Personalisierte Tipps", "Integriertes Tagebuch", "Fortschrittskontrolle"],
        tags: ["wellness", "stimmung", "psychische gesundheit", "tagebuch"],
    },
    "bike-trip-planner": {
        name: "Motorrad-Planer",
        shortDescription: "Planen Sie Motorradtouren mit Wetter- und Höhenkarten.",
        longDescription: "Entwerfen Sie die perfekte Motorradroute, indem Sie das Straßenprofil analysieren, Wettervorhersagen entlang der Route prüfen und gefährliche Abschnitte vermeiden.",
        features: ["Routenplanung", "Wetter-Integration", "Höhenprofil", "Gefahrenvermeidung", "Route teilen"],
        tags: ["motorrad", "reise", "wetter", "karte"],
    },
    "focus-beat": {
        name: "Fokus-Beat",
        shortDescription: "KI-generierte Musik für tiefe Konzentration.",
        longDescription: "Erstellt unendliche, ablenkungsfreie Hintergrundmusik, die an Ihren aktuellen Arbeitsstatus angepasst ist. Ob Programmieren, Schreiben oder Lernen, Focus Beat hält Ihren Flow aufrecht.",
        features: ["Unendliche Musik", "KI-generierte Tracks", "Aktivitätsanpassung", "Ablenkungsfrei", "Fokus-Verbesserung"],
        tags: ["produktivität", "musik", "fokus", "audio"],
    },
    "growlab-bot": {
        name: "GrowLab Bot",
        shortDescription: "KI-gestützte Pflanzendiagnose und Pflegepläne.",
        longDescription: "Machen Sie ein Foto Ihrer kranken Pflanze und erhalten Sie sofortige Diagnose sowie Schritt-für-Schritt-Anleitungen zur Wiederbelebung. Verfolgt das Wachstum über die Zeit.",
        features: ["Foto-Diagnostik", "Schritt-für-Schritt-Pflegepläne", "Wachstumsverfolgung", "Gieß-Erinnerungen", "Pflanzendatenbank"],
        tags: ["gartenarbeit", "pflanzen", "pflege", "zuhause"],
    },
    "debate-pro": {
        name: "Debatten-Profi",
        shortDescription: "Üben Sie Argumentationsfähigkeiten gegen einen KI-Gegner.",
        longDescription: "Schärfen Sie Ihre kritischen Denkfähigkeiten, indem Sie mit einer KI über verschiedene Themen debattieren. Erhalten Sie Feedback zu Ihrer Logik und Überzeugungstechnik.",
        features: ["Echtzeit-Debatte", "Logik-Feedback", "Trugschluss-Erkennung", "Verschiedene Themen", "Argumentationsverbesserung"],
        tags: ["bildung", "debatte", "fähigkeiten", "logik"],
    },
    "pixel-restore": {
        name: "Pixel Wiederherstellen",
        shortDescription: "Sofortige Restaurierung und Verbesserung alter Fotos.",
        longDescription: "Hauchen Sie alten Familienfotos neues Leben ein. Laden Sie unscharfe, zerstörte Scans hoch und sehen Sie, wie sie in hoher Auflösung restauriert und koloriert werden.",
        features: ["Kolorierung", "Kratzerentfernung", "4K-Upscaling", "Stapelverarbeitung", "Sichere Speicherung"],
        tags: ["fotografie", "restaurierung", "ki", "kreativ"],
    },
    "chef-vision": {
        name: "Chef-Vision",
        shortDescription: "Kühlschrankinhalt eingeben, Gourmet-Rezepte erhalten.",
        longDescription: "Machen Sie ein Foto der übriggebliebenen Zutaten in Ihrem Kühlschrank, und Chef Vision erstellt schrittweise Gourmet-Rezepte nur mit dem, was Sie haben.",
        features: ["Zutatenerkennung", "Schrittweise Rezepte", "Nährwertangaben", "Allergieanpassung", "Favoriten speichern"],
        tags: ["essen", "kochen", "rezepte", "lifestyle"],
    },
    "finance-whisperer": {
        name: "Finanz-Flüsterer",
        shortDescription: "Analysieren Sie Ausgabegewohnheiten und finden Sie Einsparungen.",
        longDescription: "Verbinden Sie Ihre Kontoauszüge und lassen Sie die KI analysieren, wohin Ihr Geld fließt. Erhalten Sie Tipps zur Reduzierung von Abos und zum Sparen.",
        features: ["Ausgabenanalyse", "Abo-Warnungen", "Spartipps", "Sichere Verschlüsselung", "Budget-Ziele"],
        tags: ["finanzen", "geld", "sparen", "werkzeug"],
    },
};

export const getLocalizedSeedApps = (lang: Language): App[] => {
    if (lang === "en") return seedApps;

    const translationMap = lang === "es" ? esTranslations : deTranslations;

    return seedApps.map(app => {
        const tr = translationMap[app.slug];
        if (!tr) return app;
        return {
            ...app,
            ...tr,
        };
    });
};
