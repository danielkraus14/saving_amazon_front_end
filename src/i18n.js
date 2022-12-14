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
                    link1: "??Qu?? logramos?",
                    link2: "La Comunidad",
                },
                landingPage: {
                    title: "Sembremos juntos el futuro.",
                    subtitle: "Un ??rbol a la vez",
                    description: "Como parte de nuestro compromiso continuo para contrarrestar los efectos del cambio clim??tico, Adsmovil ha decidido plantar un bosque en el Amazonas en colaboraci??n con la Fundaci??n Saving the Amazon, dedicada a la conservaci??n de la selva amaz??nica, mediante la plantaci??n de ??rboles con el apoyo de las comunidades ind??genas locales.",
                    sectionForestTitle: "Nuestro bosque",
                    sectionForestTrees: " ??rboles plantados",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 capturado",
                    sectionForestCO2Captured: "55.998kg",
                    section2TrackTitle: "Rastrear mi ??rbol",
                    section2TrackInputPlaceholder: "Ingresa tu n??mero de rastreo",
                    section2TrackButton: "BUSCAR",
                    caption: "Podr??s hacer seguimiento a tu ??rbol durante 3 a??os por medio de fotograf??as que se actualizar??n semestralmente."
                },
                modalTracking: {
                    title: "Mi ??rbol en el Amazonas",
                    subtitle: "Eres parte de la Amazon??a, el monumento natural vivo m??s grande del planeta.",
                    codeNumber: "C??digo del ??rbol:",
                    downloadCertificate: "Descargar mi certificado",
                    downloadImage: "Descargar imagen para redes",
                    caption: "Plantando y cuidando este ??rbol, estamos honrando tu nombre y ayudando al planeta a combatir el cambio clim??tico, hoy, y para las futuras generaciones.",
                    timeToAct: "??Es tiempo de actuar!",
                    timeToActDescription: "Todos podemos formar parte de este movimiento por un planeta mejor. Invita a tus conocidos y seres queridos a unirse a nosotros y ay??danos a proteger el Amazonas.",
                    plantTreeButton: "Planta un ??rbol",
                    modalError: "No se encontr?? ning??n ??rbol con ese c??digo. Por favor, int??ntalo de nuevo o planta un ??rbol.",
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
                    subtitle: "Uma ??rvore de cada vez",
                    description: "Como parte de nosso compromisso cont??nuo de combater os efeitos das mudan??as clim??ticas, a Adsmovil decidiu plantar uma floresta na Amaz??nia em colabora????o com a Saving the Amazon Foundation, dedicada ?? conserva????o da floresta amaz??nica, plantando ??rvores com o apoio de comunidades ind??genas.",
                    sectionForestTitle: "Nossa floresta",
                    sectionForestTrees: "??rvores plantadas",
                    sectionForestTreesPlanted: "1.222",
                    sectionForestCO2: "CO2 capturado",
                    sectionForestCO2Captured: "55.998kg",
                    section2TrackTitle: "Rastrear minha ??rvore",
                    section2TrackInputPlaceholder: "Digite seu n??mero de rastreamento",
                    section2TrackButton: "PROCURAR",
                    caption: "Voc?? poder?? acompanhar sua ??rvore por 3 anos atrav??s de fotografias que ser??o atualizadas a cada seis meses."
                },
                modalTracking: {
                    title: "Minha ??rvore na Amaz??nia",
                    subtitle: "Voc?? faz parte da Amaz??nia, o maior monumento natural vivo do planeta.",
                    codeNumber: "C??digo da ??rvore:",
                    downloadCertificate: "Baixe meu certificado",
                    downloadImage: "Baixar imagem para redes sociais",
                    caption: "Ao plantar e cuidar desta ??rvore, estamos honrando seu nome e ajudando o planeta a combater as mudan??as clim??ticas, hoje e para as gera????es futuras.",
                    timeToAct: "?? hora de agir!",
                    timeToActDescription: "Todos n??s podemos fazer parte deste movimento por um planeta melhor. Convide seus amigos e entes queridos para se juntar a n??s e nos ajudar a proteger a Amaz??nia.",
                    plantTreeButton: "Plante uma ??rvore",
                    modalError: "Nenhuma ??rvore encontrada com esse c??digo. Por favor, tente novamente ou plante uma ??rvore.",
                }
            }
        }
    }     
});
