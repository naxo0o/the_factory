const bandsData = [
    {
        id: "the-doors",
        name: "The Doors",
        years: "1965 – 1973",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Doors_1968.JPG/1280px-The_Doors_1968.JPG",
        content: {
            es: {
                bio: "Formados en Los Ángeles en 1965, The Doors fueron una de las bandas más influyentes y controvertidas de la década de 1960 y principios de los 70. Liderados por el carismático y poético Jim Morrison, junto al teclista Ray Manzarek, el guitarrista Robby Krieger y el batería John Densmore, la banda fusionó rock psicodélico, blues y poesía oscura. Se destacaron por no tener un bajista permanente, utilizando en su lugar los pedales de bajo de teclado de Manzarek en vivo. Letras que exploraban el existencialismo, la psicología y la rebelión los convirtieron en iconos de la contracultura.",
                impact: "Su álbum debut homónimo en 1967 fue una piedra angular, con éxitos como 'Light My Fire'. La prematura muerte de Morrison en 1971 a los 27 años cimentó su estatus mítico."
            },
            en: {
                bio: "Formed in Los Angeles in 1965, The Doors were one of the most influential and controversial rock bands of the 1960s and early 1970s. Led by the charismatic and poetic Jim Morrison, alongside keyboardist Ray Manzarek, guitarist Robby Krieger, and drummer John Densmore, the band uniquely fused psychedelic rock, blues, and dark poetry. They notable lacked a permanent bass player, relying on Manzarek's keyboard bass pedals during live performances. Their lyrics, exploring existentialism, psychology, and rebellion, made them counterculture icons.",
                impact: "Their eponymous 1967 debut album was a cornerstone, featuring hits like 'Light My Fire'. Morrison's premature death in 1971 at age 27 cemented their mythical status."
            },
            fr: {
                bio: "Formé à Los Angeles en 1965, The Doors fut l'un des groupes de rock les plus influents et controversés des années 60 et du début des années 70. Dirigé par le charismatique et poétique Jim Morrison, avec le claviériste Ray Manzarek, le guitariste Robby Krieger et le batteur John Densmore, le groupe a fusionné le rock psychédélique, le blues et la poésie sombre. Ils se distinguaient par l'absence d'un bassiste permanent, utilisant plutôt les pédales de basse du clavier de Manzarek en direct. Leurs paroles explorant l'existentialisme, la psychologie et la rébellion en ont fait des icônes de la contre-culture.",
                impact: "Leur premier album éponyme de 1967 a été fondamental, avec des succès tels que 'Light My Fire'. La mort prématurée de Morrison en 1971, à 27 ans, a cimenté leur statut mythique."
            }
        },
        curiosities: {
            es: ["En la histórica actuación en The Ed Sullivan Show, ignoraron la petición del presentador de cambiar la letra 'girl, we couldn't get much higher', enfureciendo a la cadena.", "El nombre de la banda proviene del libro de Aldous Huxley, 'The Doors of Perception'."],
            en: ["During their historic performance on The Ed Sullivan Show, they ignored requests to change the lyric 'girl, we couldn't get much higher', infuriating the network.", "The band's name comes from Aldous Huxley's book, 'The Doors of Perception'."],
            fr: ["Lors de leur prestation historique au Ed Sullivan Show, ils ont ignoré la demande de changer les paroles 'girl, we couldn't get much higher', rendant furieuse la chaîne.", "Le nom du groupe vient du livre d'Aldous Huxley, 'Les Portes de la perception'."]
        }
    },
    {
        id: "pink-floyd",
        name: "Pink Floyd",
        years: "1965 – 1994 (Principal)",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/500px-Pink_Floyd_-_all_members.jpg",
        content: {
            es: {
                bio: "Originarios de Londres, Pink Floyd fue un arquitecto temprano del rock psicodélico, liderados inicialmente por el enigmático Syd Barrett. Tras la salida de Barrett por problemas de salud mental, Roger Waters tomó el timón creativo junto a David Gilmour, Richard Wright y Nick Mason. La banda evolucionó hacia el rock progresivo, elaborando álbumes conceptuales colosales, letras filosóficas e inmensas producciones escénicas que a menudo requerían instalaciones sonoras cuadrafónicas avanzadas.",
                impact: "Con álbumes como 'The Dark Side of the Moon' (1973), que permaneció en las listas de Billboard durante 741 semanas increíbles, redefinieron por completo de lo que era capaz un disco de vinilo a nivel de audio inmersivo."
            },
            en: {
                bio: "Hailing from London, Pink Floyd were early architects of psychedelic rock, initially led by the enigmatic Syd Barrett. Following Barrett's departure due to mental health issues, Roger Waters took the creative helm alongside David Gilmour, Richard Wright, and Nick Mason. The band evolved into progressive rock, crafting colossal conceptual albums, philosophical lyrics, and massive stage productions that often utilized advanced quadraphonic sound setups.",
                impact: "With albums like 'The Dark Side of the Moon' (1973), which lingered on the Billboard charts for an incredible 741 weeks, they completely redefined what a vinyl record was capable of in terms of immersive audio."
            },
            fr: {
                bio: "Originaires de Londres, Pink Floyd ont été les premiers architectes du rock psychédélique, d'abord dirigés par l'énigmatique Syd Barrett. Après le départ de Barrett en raison de problèmes de santé mentale, Roger Waters a pris la direction créative aux côtés de David Gilmour, Richard Wright et Nick Mason. Le groupe a évolué vers le rock progressif, créant des albums conceptuels colossaux, des paroles philosophiques et d'immenses productions scéniques utilisant souvent des systèmes sonores quadriphoniques.",
                impact: "Avec des albums comme 'The Dark Side of the Moon' (1973), qui est resté dans le classement Billboard pendant le chiffre incroyable de 741 semaines, ils ont complètement redéfini ce dont un disque vinyle était capable sur le plan audio."
            }
        },
        curiosities: {
            es: ["El famoso cerdo inflable de la portada de 'Animals' se soltó durante la sesión fotográfica, paralizando temporalmente el tráfico aéreo sobre el aeropuerto de Heathrow.", "'Shine On You Crazy Diamond' es un tributo a Syd Barrett, quien apreció casualmente en el estudio el día que la grababan, irreconocible."],
            en: ["The famous inflatable pig from the 'Animals' cover broke free during the photoshoot, temporarily halting air traffic over Heathrow Airport.", "'Shine On You Crazy Diamond' is a tribute to Syd Barrett, who casually appeared at the studio the day it was being recorded, completely unrecognizable."],
            fr: ["Le célèbre cochon gonflable de la pochette 'Animals' s'est détaché pendant la séance photo, paralysant temporairement le trafic aérien au-dessus de l'aéroport d'Heathrow.", "'Shine On You Crazy Diamond' est un hommage à Syd Barrett, apparu par hasard au studio le jour de l'enregistrement, méconnaissable."]
        }
    },
    {
        id: "velvet-underground",
        name: "The Velvet Underground",
        years: "1964 – 1973",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Velvet_Underground_%26_Nico_publicity_photo_%28retouched%29.jpg/1280px-Velvet_Underground_%26_Nico_publicity_photo_%28retouched%29.jpg",
        content: {
            es: {
                bio: "Apadrinados brevemente por Andy Warhol, The Velvet Underground (Lou Reed, John Cale, Sterling Morrison, Maureen Tucker y ocasionalmente Nico) fueron la antítesis de la vibra del 'Verano del Amor' reinante a finales de los 60. Su música era ruidosa, brutalmente honesta, vanguardista y a menudo tocaba temas tabú como la drogadicción, el sadomasoquismo y la paranoia urbana en la ciudad de Nueva York. Combinaban el rock primitivo con técnicas de música concreta y droning vanguardista.",
                impact: "Como dijo famosamente Brian Eno, 'El primer álbum solo vendió 10.000 copias, pero todos los que lo compraron formaron una banda'. Inventaron esencialmente el rock alternativo y el punk antes de tiempo."
            },
            en: {
                bio: "Briefly managed by Andy Warhol, The Velvet Underground (Lou Reed, John Cale, Sterling Morrison, Maureen Tucker, and occasionally Nico) were the exact antithesis to the reigning 'Summer of Love' vibe of the late 1960s. Their music was noisy, brutally honest, avant-garde, and often tackled taboo subjects such as drug addiction, sadomasochism, and urban paranoia in New York City. They blended primitive rock and roll with drone and concrete music techniques from Cale's avant-garde background.",
                impact: "As Brian Eno famously stated, 'The first album only sold 10,000 copies, but everyone who bought it formed a band'. They essentially invented alternative rock and punk ahead of time."
            },
            fr: {
                bio: "Brièvement managés par Andy Warhol, The Velvet Underground (Lou Reed, John Cale, Sterling Morrison, Maureen Tucker et occasionnellement Nico) étaient l'antithèse absolue de l'ambiance du 'Summer of Love' de la fin des années 60. Leur musique était bruyante, brutalement honnête, avant-gardiste, abordant des sujets tabous (drogue, sadomasochisme, paranoïa urbaine). Ils mélangeaient le rock primitif avec des techniques d'avant-garde apportées par Cale.",
                impact: "Comme l'a dit Brian Eno : 'Le premier album ne s'est vendu qu'à 10 000 exemplaires, mais tous ceux qui l'ont acheté ont formé un groupe'. Ils ont essentiellement inventé le rock alternatif et le punk."
            }
        },
        curiosities: {
            es: ["La batería de Maureen Tucker solía estar conformada por tambores colocados de lado e incluso botes de basura tocados con mazos, raramente usaba platillos.", "El plátano de la portada de su debut era un pegatina que, al ser pelada, revelaba un plátano color carne debajo."],
            en: ["Maureen Tucker's drum kit often consisted of drums turned on their sides and even trash cans played with mallets; she rarely used cymbals.", "The banana on the cover of their debut album was originally a sticker that, when peeled back, revealed a flesh-colored banana underneath."],
            fr: ["La batterie de Maureen Tucker consistait souvent en des tambours placés sur le côté et des poubelles frappées avec des maillets; elle utilisait rarement des cymbales.", "La banane sur la couverture de leurs débuts était originellement un autocollant qu'on pouvait peler, révélant une banane couleur chair en dessous."]
        }
    },
    {
        id: "king-crimson",
        name: "King Crimson",
        years: "1968 – 1974 / 1981 – 1984",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/King_Crimson%2C_De_vereeniging_te_Nijmegen_-_48113112087_%28cropped%29.jpg/1920px-King_Crimson%2C_De_vereeniging_te_Nijmegen_-_48113112087_%28cropped%29.jpg",
        content: {
            es: {
                bio: "Fundada por el guitarrista Robert Fripp y el baterista Michael Giles en 1968, King Crimson es considerada una de las bandas fundacionales absolutas del rock progresivo. Su debut de 1969, 'In the Court of the Crimson King', asombró al mundo con su complejidad técnica casi aterradora, fusionando jazz, música clásica europea de cámara y heavy metal pesado. A lo largo de las décadas (y de los 70), su alineación cambió constantemente bajo la dirección severa de Fripp.",
                impact: "Su álbum debut, que destronó al 'Abbey Road' de los Beatles brevemente, introdujo una destreza técnica virtuosa (encabezada en sus inicios por Greg Lake y Ian McDonald) que formó un estándar inalcanzable de progreso musical."
            },
            en: {
                bio: "Founded by guitarist Robert Fripp and drummer Michael Giles in 1968, King Crimson is widely considered one of the absolute foundational bands of progressive rock. Their 1969 debut, 'In the Court of the Crimson King', stunned the world with its almost frightening technical complexity, fusing jazz, European classical chamber music, and heavy metal doom. Across decades (and heavily in the 70s), their lineup changed constantly under the stern direction of Fripp.",
                impact: "Their debut album, which briefly knocked The Beatles' 'Abbey Road' from the top of the charts, introduced a virtuosic technical prowess (spearheaded early on by Greg Lake and Ian McDonald) that formed an unreachable standard for musical progressiveness."
            },
            fr: {
                bio: "Fondé par le guitariste Robert Fripp et le batteur Michael Giles en 1968, King Crimson est largement considéré comme l'un des groupes fondateurs absolus du rock progressif. Leurs débuts en 1969, 'In the Court of the Crimson King', ont stupéfié le monde avec une complexité technique presque effrayante, fusionnant le jazz, la musique classique européenne et le heavy metal sombre. Au fil des décennies, leur formation n'a cessé de changer sous la sévère direction de Fripp.",
                impact: "Leur premier album a temporairement détrôné 'Abbey Road' des Beatles et introduit une virtuosité technique qui a établi une norme inatteignable pour le rock progressif."
            }
        },
        curiosities: {
            es: ["En un masivo concierto gratis en Hyde Park en 1969, tocaron para medio millón de personas siendo prácticamente desconocidos, explotando a la fama ese día.", "Robert Fripp es el único miembro que ha estado en cada encarnación de la banda a lo largo de 50 años."],
            en: ["At a massive free concert in Hyde Park in 1969, they played to half a million people while still being virtually unknown, breaking into stardom that very day.", "Robert Fripp is the only member to have been in every incarnation of the band over 50 years."],
            fr: ["Lors d'un immense concert gratuit à Hyde Park en 1969, ils ont joué devant un demi-million de personnes alors qu'ils étaient pratiquement inconnus, explosant de célébrités ce jour-là.", "Robert Fripp est le seul membre à avoir fait partie de chaque incarnation du groupe sur 50 ans."]
        }
    },
    {
        id: "the-who",
        name: "The Who",
        years: "1964 – 1982 (Edad de oro)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Who_-_1975.jpg",
        content: {
            es: {
                bio: "Surgidos de la escena Mod británica, The Who (Roger Daltrey, Pete Townshend, John Entwistle, Keith Moon) redefinieron el espectáculo del rock. Conocidos por su autodestrucción en el escenario (rompiendo guitarras y baterías), Townshend a la guitarra componía de forma magistral, mientras la salvaje batería de Moon y las líneas de bajo de viento solista de Entwistle crearon una inmensa pared de sonido. Durante los primeros 70, la banda adoptó composiciones inmensamente complejas y pioneras del uso del sintetizador.",
                impact: "Townshend inventó la 'Ópera Rock' con discos conceptuales y narrativos inmensos como 'Tommy' (1969) y 'Quadrophenia' (1973), cambiando la estructura narrativa del rock."
            },
            en: {
                bio: "Emerging from the British Mod scene, The Who (Roger Daltrey, Pete Townshend, John Entwistle, Keith Moon) redefined rock spectacle. Renowned for their auto-destructive art on stage (smashing guitars and drum kits), Townshend's masterful songwriting was anchored by Moon's wild drumming and Entwistle's lead-instrument style bass lines, creating a massive wall of sound. Moving into the early 70s, the band embraced complex compositions and pioneered the early use of synthesizers in rock.",
                impact: "Townshend virtually invented the 'Rock Opera' format with massive narrative conceptual albums like 'Tommy' (1969) and 'Quadrophenia' (1973), forever changing narrative structures in rock music."
            },
            fr: {
                bio: "Issus de la scène Mod britannique, The Who (Roger Daltrey, Pete Townshend, John Entwistle, Keith Moon) ont redéfini le spectacle rock. Connus pour leur art auto-destructeur sur scène (brisant guitares et batteries), Townshend, à la composition, était soutenu par la batterie sauvage de Moon et la basse percutante d'Entwistle. Au début des années 70, le groupe s’est tourné vers des compositions complexes, pionnières dans l'utilisation de synthétiseurs.",
                impact: "Townshend a pratiquement inventé le concept d'«Opéra Rock» avec des albums colossaux comme 'Tommy' (1969) et 'Quadrophenia' (1973)."
            }
        },
        curiosities: {
            es: ["Keith Moon usaba explosivos en su batería para terminar los shows; una vez usó demasiada pólvora e hirió permanentemente la audición de Pete Townshend.", "Fueron los inventores accidentales del 'Marshall Stack', pidiendo a Jim Marshall amplificadores tan fuertes y potentes que superaran el ruido del público adolescente al gritar."],
            en: ["Keith Moon used explosives in his drum kit to end shows; he once used too much blasting powder, permanently damaging Pete Townshend's hearing.", "They were the accidental inventors of the 'Marshall Stack', begging Jim Marshall to build louder amps that could cut through screaming teenage crowds."],
            fr: ["Keith Moon utilisait des explosifs dans sa batterie pour terminer les concerts; il a un jour utilisé trop de poudre, endommageant de façon permanente l'audition de Pete Townshend.", "Ils sont les inventeurs accidentels du 'Marshall Stack', ayant demandé des amplis assez puissants pour couvrir les cris des jeunes spectateurs."]
        }
    },
    {
        id: "jefferson-airplane",
        name: "Jefferson Airplane",
        years: "1965 – 1972",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jefferson_Airplane.jpg/1280px-Jefferson_Airplane.jpg",
        content: {
            es: {
                bio: "El estruendo eléctrico que definió San Francisco, Jefferson Airplane fue clave para el nacimiento del acid rock y la psicodelia del 'Verano del Amor'. Con la arrolladora voz y presencia escénica de Grace Slick liderando el frente junto a Marty Balin y Paul Kantner, cantaban sobre alucinógenos, Alicia en el País de las Maravillas y revoluciones políticas con la misma intensidad. Su sonido guitarrero retorcido caracterizó la contracultura de 1967.",
                impact: "Las canciones 'White Rabbit' y 'Somebody to Love' son considerados los himnos indiscutibles y definitivos de la generación hippie de mediados/finales de los 60."
            },
            en: {
                bio: "The electric roar that defined San Francisco, Jefferson Airplane was pivotal to the birth of acid rock and the psychedelia of the 'Summer of Love'. With Grace Slick's soaring, powerful vocals leading the front alongside Marty Balin and Paul Kantner, they sang about hallucinogens, Alice in Wonderland, and political revolution with equal intensity. Their intertwining guitars and booming bass characterized the 1967 counterculture.",
                impact: "Tracks like 'White Rabbit' and 'Somebody to Love' remain the undisputed, definitive anthems of the hippie generation of the late 1960s."
            },
            fr: {
                bio: "Le rugissement électrique qui a défini San Francisco, Jefferson Airplane a été crucial pour la naissance de l'acid rock et du psychédélisme du « Summer of Love ». Menés par la voix puissante de Grace Slick, Marty Balin et Paul Kantner, ils chantaient sur les hallucinogènes, Alice au pays des merveilles, et la révolution politique avec la même intensité.",
                impact: "Des chansons telles que 'White Rabbit' et 'Somebody to Love' sont considérées comme les hymnes incontestables de la génération hippie des années 60."
            }
        },
        curiosities: {
            es: ["Aparecieron en Woodstock el infame 'domingo por la mañana', con Grace Slick anunciando que estaban listos para tocar algo de 'música maníaca matutina'.", "Fueron los únicos que lograron la hazaña de tocar en los tres festivales estadounidenses más icónicos de los 60: Monterey, Woodstock y Altamont."],
            en: ["They appeared at Woodstock on the infamous 'Sunday morning', with Grace Slick announcing they were ready to play some 'morning maniac music'.", "They were the only act to achieve the feat of playing all three iconic 1960s American rock festivals: Monterey, Woodstock, and Altamont."],
            fr: ["Ils sont apparus à Woodstock lors du tristement célèbre «dimanche matin», Grace Slick déclarant qu'ils allaient jouer de la «morning maniac music».", "Ils sont les seuls artistes à avoir joué aux trois grands festivals historiques des années 60: Monterey, Woodstock, et Altamont."]
        }
    },
    {
        id: "the-stooges",
        name: "The Stooges",
        years: "1967 – 1974",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Iggy_and_The_Stooges_-_4572393187.jpg",
        content: {
            es: {
                bio: "Emergiendo del frío industrial de Detroit, Míchigan, The Stooges, liderados por el incombustible Iggy Pop y junto a los crudos riffs de guitarra de Ron Asheton, fueron el origen primigenio del punk rock. Mientras las bandas en California cantaban sobre amor y paz, The Stooges tocaban himnos saturados, repetitivos y caóticos de aburrimiento adolescente y rebeldía. Iggy Pop introdujo una teatralidad física casi automutiladora en escena, lanzándose al público y retorciéndose como posesionado.",
                impact: "Discos como 'Fun House' (1970) y 'Raw Power' (1973) vendieron pobremente en su momento, pero se convirtieron en el anteproyecto exacto de cómo debían sonar y verse los Ramones y los Sex Pistols años más tarde."
            },
            en: {
                bio: "Emerging from the industrial cold of Detroit, Michigan, The Stooges, led by the indestructible Iggy Pop alongside Ron Asheton's raw buzzy guitar riffs, were the primordial genesis of punk rock. While bands in California sang about love and peace, The Stooges played saturated, repetitive, and chaotic anthems of teenage boredom and violent rebellion. Iggy Pop introduced a physical, almost self-mutilating theatricality on stage, diving into crowds and writhing like a possessed man.",
                impact: "Albums like 'Fun House' (1970) and 'Raw Power' (1973) sold poorly upon release but became the exact blueprint for how bands like the Ramones and Sex Pistols should sound and act years later."
            },
            fr: {
                bio: "Émergeant du froid industriel de Detroit, The Stooges, dirigés par l'indestructible Iggy Pop et les riffs bruts de Ron Asheton, furent l'origine primordiale du punk rock. Tandis que la Californie chantait la paix et l'amour, ils jouaient des hymnes saturés, chaotiques, sur l'ennui et la rébellion. Iggy Pop a introduit une théâtralité physique presque automutilatrice sur scène, se jetant dans la foule (stage-diving) et se tordant.",
                impact: "Des albums comme 'Fun House' (1970) et 'Raw Power' (1973) ont peu vendu à l'époque, mais sont devenus le plan de construction de groupes comme les Ramones et les Sex Pistols."
            }
        },
        curiosities: {
            es: ["Iggy Pop es generalmente reconocido como el inventor absoluto del 'Stage Dive' (lanzarse del escenario al agolpe del público).", "Su álbum debut fue producido por John Cale de The Velvet Underground, creando un puente entre ambas vanguardias brutales."],
            en: ["Iggy Pop is widely credited as the undisputed inventor of the 'Stage Dive' (leaping from the stage into the crowd).", "Their debut album was produced by John Cale of The Velvet Underground, creating a bridge between both brutal avant-garde acts."],
            fr: ["Iggy Pop est généralement reconnu comme l'inventeur du 'Stage Dive' (plonger de la scène dans la foule).", "Leur premier album a été produit par John Cale du Velvet Underground, créant un pont entre ces deux avant-gardes féroces."]
        }
    },
    {
        id: "love",
        name: "Love",
        years: "1965 – 1973",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LOVE60s.png/500px-LOVE60s.png",
        content: {
            es: {
                bio: "Love, arraigados en Los Ángeles y liderados por el temperamental genio afroamericano Arthur Lee, fueron quizá los verdaderos reyes olvidados del renacimiento psicodélico californiano. Su música enlazaba folk-rock estridente, arreglos orquestales casi barrocos y pop soleado recubierto con letras sombrías sobre mortalidad e introspección severa, destacándose profundamente frente a grupos contemporáneos como The Byrds.",
                impact: "El disco de 1967 'Forever Changes' es aclamado universalmente por la crítica moderna (habitualmente top de todos los tiempos), con su intrincada acústica y orquestación representando la disolución del Verano del Amor en melancolía y oscuridad civil californiana."
            },
            en: {
                bio: "Love, rooted in Los Angeles and led by the temperamental African-American genius Arthur Lee, were perhaps the true forgotten royalty of the Californian psychedelic renaissance. Their music threaded jangle folk-rock, almost baroque orchestral arrangements, and sunny melodic pop overlaid with somber lyrics about mortality and harsh introspection, making them stand out sharply against contemporaries like The Byrds.",
                impact: "Their 1967 masterpiece 'Forever Changes' is universally acclaimed by modern critics as one of the greatest albums of all time. Its intricate acoustic sounds and orchestration represent the dissolution of the Summer of Love into Californian melancholy and civic darkness."
            },
            fr: {
                bio: "Basés à Los Angeles et dirigés par le génie afro-américain Arthur Lee, Love fut probablement la vraie noblesse oubliée de la renaissance psychédélique. Leur musique mélangeait le folk-rock, des arrangements orchestraux presque baroques et une pop ensoleillée mais surmontée de paroles sombres sur la mort et l'introspection sévère. Ils se démarquaient radicalement de contemporains comme The Byrds.",
                impact: "L'album 'Forever Changes' (1967) est universellement acclamé aujourd'hui par la critique; son acoustique complexe représente la dissolution du Summer of Love dans la mélancolie californienne."
            }
        },
        curiosities: {
            es: ["Curiosamente, a diferencia de otras bandas que daban inmensos tours mundiales, a Arthur Lee no le gustaba viajar y rara vez salían a tocar fuera de LA.", "Ellos fueron quienes recomendaron e insistieron al jefe del sello Elektra Records que firmara a una pequeña banda de conocidos llamada 'The Doors'."],
            en: ["Curiously, unlike other bands pursuing massive world tours, Arthur Lee notoriously disliked traveling, and Love rarely ever played shows outside of Los Angeles.", "It was Love who heavily recommended and urged the head of Elektra Records to sign a then-small band of acquaintances known as 'The Doors'."],
            fr: ["Il est curieux de noter, contrairement aux grands groupes d'alors en tournée, qu'Arthur Lee n'aimait pas voyager et qu'ils jouaient rarement en dehors de LA.", "Ce sont eux qui ont recommandé et insisté auprès du patron d'Elektra Records pour signer un petit groupe appelé 'The Doors'."]
        }
    },
    {
        id: "television",
        name: "Television",
        years: "1973 – 1978",
        image: "https://upload.wikimedia.org/wikipedia/en/a/af/Marquee_moon_album_cover.jpg",
        content: {
            es: {
                bio: "Emergiendo a mediados de los 70 en el emblemático club CBGB de Nueva York junto con los Ramones o Blondie, Television no hacían punk minimalista. Su sonido de vanguardia articulaba dos guitarras tremendamente complejas interactuando simultáneamente (Tom Verlaine y Richard Lloyd). Sus rítmicas estructuras entrelazaban fraseos del free jazz modal con improvisaciones extenuantes pero sumamente melódicas en tono de rock descarnado.",
                impact: "El disco de 1977 'Marquee Moon' reescribió las normas de lo que se permitiría tocar en el punk y new wave neoyorquino, influyendo enormemente al post-punk futuro, desde Joy Division hasta The Strokes y Sonic Youth."
            },
            en: {
                bio: "Emerging in the mid-1970s out of the emblematic CBGB club in New York alongside the Ramones and Blondie, Television were completely distinct from minimalist punk. Their avant-garde sound articulated two enormously complex, interlocking lead guitars (played by Tom Verlaine and Richard Lloyd). Their rhythmic structures intertwined modal free jazz phrasings with exhausting, highly melodic improvisations within stark rock frameworks.",
                impact: "Their 1977 masterwork 'Marquee Moon' rewrote the rules for the New York punk and emerging new wave scenes, massively influencing the entire trajectory of post-punk, from Joy Division to The Strokes and Sonic Youth."
            },
            fr: {
                bio: "Émergeant au milieu des années 70 de l'emblématique club new-yorkais CBGB avec les Ramones et Blondie, Television ne jouait pas au punk minimaliste. Leur avant-garde reposait sur deux guitares solistes s'entremêlant de manière complexe (Tom Verlaine et Richard Lloyd). Leurs rythmiques improvisées puisaient dans le free jazz tout en restant terriblement mélodiques et rock.",
                impact: "L'album de 1977 'Marquee Moon' a réécrit ce qui était permis de jouer dans le punk new-yorkais et a influencé tout le post-punk, de Joy Division à The Strokes."
            }
        },
        curiosities: {
            es: ["En lugar de acordes de poder, usaban escalas asociadas principalmente con el jazz de Coltrane para sus duelos de guitarra de 10 minutos.", "A pesar del abrumador éxito crítico de su debut, Television nunca despuntó comercialmente frente a sus actos compañeros del CBGB."],
            en: ["Instead of traditional power chords, they frequently utilized scales primarily associated with John Coltrane's jazz for their 10-minute guitar duels.", "Despite the overwhelming, unanimous critical praise for their debut, Television never broke through commercially compared to their CBGB peers."],
            fr: ["Plutôt que des accords simples, ils utilisaient des gammes associées au jazz de John Coltrane pour leurs duels de guitares de 10 minutes.", "Malgré le succès critique stupéfiant de leur premier album, le groupe n’a jamais eu le succès commercial des autres artistes du CBGB."]
        }
    }
];
