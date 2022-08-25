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
                    sectionForestCO2Captured: "55.998kg",
                    section2TrackTitle: "Track my tree",
                    section2TrackInputPlaceholder: "Enter your tracking number",
                    section2TrackButton: "SEARCH",
                    caption: "You will be able to track your tree for 3 years through photographs that will be updated every six months."
                },
                modalTracking: {
                    title: "My tree in the Amazon",
                    subtitle: "You are part of the Amazon, the largest living natural monument on the planet.",
                    codeNumber: "Tree code:",
                    downloadCertificate: "Download my certificate",
                    downloadImage: "Download image for social media",
                    caption: "By planting and caring for this tree, we are honoring your name and helping the planet fight climate change, today, and for future generations.",
                    timeToAct: "It's time to act!",
                    timeToActDescription: "We can all be part of this movement for a better planet. Invite your friends and loved ones to join us and help us protect the Amazon.",
                    plantTreeButton: "Plant a tree",
                    modalError: "No tree found with that code. Please try again or plant a tree.",
                }
            }
        },
        es: {
            translation: {
                links: {
                    link1: "¿Qué logramos?",
                    link2: "La Comunidad",
                },
                landingPage: {
                    title: "Sembremos juntos el futuro.",
                    subtitle: "Un árbol a la vez",
                    description: "Como parte de nuestro compromiso continuo para contrarrestar los efectos del cambio climático, Adsmovil ha decidido plantar un bosque en el Amazonas en colaboración con la Fundación Saving the Amazon, dedicada a la conservación de la selva amazónica, mediante la plantación de árboles con el apoyo de las comunidades indígenas locales.",
                    sectionForestTitle: "Nuestro bosque",
                    sectionForestTrees: " Árboles plantados",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 capturado",
                    sectionForestCO2Captured: "55.998kg",
                    section2TrackTitle: "Rastrear mi árbol",
                    section2TrackInputPlaceholder: "Ingresa tu número de rastreo",
                    section2TrackButton: "BUSCAR",
                    caption: "Podrás hacer seguimiento a tu árbol durante 3 años por medio de fotografías que se actualizarán semestralmente."
                },
                modalTracking: {
                    title: "Mi árbol en el Amazonas",
                    subtitle: "Eres parte de la Amazonía, el monumento natural vivo más grande del planeta.",
                    codeNumber: "Código del árbol:",
                    downloadCertificate: "Descargar mi certificado",
                    downloadImage: "Descargar imagen para redes",
                    caption: "Plantando y cuidando este árbol, estamos honrando tu nombre y ayudando al planeta a combatir el cambio climático, hoy, y para las futuras generaciones.",
                    timeToAct: "¡Es tiempo de actuar!",
                    timeToActDescription: "Todos podemos formar parte de este movimiento por un planeta mejor. Invita a tus conocidos y seres queridos a unirse a nosotros y ayúdanos a proteger el Amazonas.",
                    plantTreeButton: "Planta un árbol",
                    modalError: "No se encontró ningún árbol con ese código. Por favor, inténtalo de nuevo o planta un árbol.",
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
                    sectionForestCO2Captured: "55.998kg",
                    section2TrackTitle: "Rastrear minha árvore",
                    section2TrackInputPlaceholder: "Digite seu número de rastreamento",
                    section2TrackButton: "PROCURAR",
                    caption: "Você poderá acompanhar sua árvore por 3 anos através de fotografias que serão atualizadas a cada seis meses."
                },
                modalTracking: {
                    title: "Minha árvore na Amazônia",
                    subtitle: "Você faz parte da Amazônia, o maior monumento natural vivo do planeta.",
                    codeNumber: "Código da árvore:",
                    downloadCertificate: "Baixe meu certificado",
                    downloadImage: "Baixar imagem para redes sociais",
                    caption: "Ao plantar e cuidar desta árvore, estamos honrando seu nome e ajudando o planeta a combater as mudanças climáticas, hoje e para as gerações futuras.",
                    timeToAct: "É hora de agir!",
                    timeToActDescription: "Todos nós podemos fazer parte deste movimento por um planeta melhor. Convide seus amigos e entes queridos para se juntar a nós e nos ajudar a proteger a Amazônia.",
                    plantTreeButton: "Plante uma árvore",
                    modalError: "Nenhuma árvore encontrada com esse código. Por favor, tente novamente ou plante uma árvore.",
                }
            }
        }
    }     
});
