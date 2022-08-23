import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                links: {
                    link1: "What did we achieve?",
                    link2: "The Comunity"
                },
                landingPage: {
                    title: "Let's sow the future together.",
                    subtitle: "One tree at a time",
                    description: "As part of our ongoing commitment to counteract the effects of climate change, Adsmovil has decided to plant a forest in the Amazon in collaboration with the Saving the Amazon Foundation, dedicated to the conservation of the Amazon rainforest, by planting trees with the support of local indigenous communities.",
                    sectionForestTitle: "Our Forest",
                    sectionForestTrees: "Trees planted",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 captured",
                    sectionForestCO2Captured: "55.998",
                    section2TrackTitle: "Track my tree",
                    section2TrackInputPlaceholder: "Enter your tracking number",
                    section2TrackButton: "SEARCH",
                }
            }
        },
        es: {
            translation: {
                links: {
                    link1: "¿Qué logramos?",
                    link2: "La Comunidad"
                },
                landingPage: {
                    title: "Sembremos juntos el futuro.",
                    subtitle: "Un árbol a la vez",
                    description: "Como parte de nuestro compromiso continuo para contrarrestar los efectos del cambio climático, Adsmovil ha decidido plantar un bosque en el Amazonas en colaboración con la Fundación Saving the Amazon, dedicada a la conservación de la selva amazónica, mediante la plantación de árboles con el apoyo de las comunidades indígenas locales.",
                    sectionForestTitle: "Nuestro bosque",
                    sectionForestTrees: " Árboles plantados",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 capturado",
                    sectionForestCO2Captured: "55.998",
                    section2TrackTitle: "Rastrear mi árbol",
                    section2TrackInputPlaceholder: "Ingresa tu número de rastreo",
                    section2TrackButton: "BUSCAR",
                }
            }
        },
        pt: {
            translation: {
                links: {
                    link1: "O que fizemos?",
                    link2: "A Comunidade"
                },
                landingPage: {
                    title: "Vamos semear o futuro juntos.",
                    subtitle: "Uma árvore de cada vez",
                    description: "Como parte de nosso compromisso contínuo de combater os efeitos das mudanças climáticas, a Adsmovil decidiu plantar uma floresta na Amazônia em colaboração com a Saving the Amazon Foundation, dedicada à conservação da floresta amazônica, plantando árvores com o apoio de comunidades indígenas.",
                    sectionForestTitle: "Nossa floresta",
                    sectionForestTrees: "Árvores plantadas",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 capturado",
                    sectionForestCO2Captured: "55.998",
                    section2TrackTitle: "Rastrear minha árvore",
                    section2TrackInputPlaceholder: "Digite seu número de rastreamento",
                    section2TrackButton: "PROCURAR",
                }
            }
        }
    }     
});
