const influentialData = [
    {
        id: "jimi-hendrix",
        name: "Jimi Hendrix",
        role: {
            es: "Guitarrista y Compositor",
            en: "Guitarist and Composer",
            fr: "Guitariste et Compositeur"
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Jimi_Hendrix_%281967%29_%28cropped%29.jpg/1280px-Jimi_Hendrix_%281967%29_%28cropped%29.jpg",
        content: {
            es: "Reescribió el vocabulario de la guitarra eléctrica usando amplificación saturada, feedback controlado y pedales de efectos de una forma jamás vista. Antes de su llegada, la guitarra se tocaba con recato; tras él, la guitarra se convirtió en un ente vivo, capaz de aullar, llorar e imitar bombas estallando (como en su icónico Star Spangled Banner). Su actuación en Woodstock y Monterrey, donde quemó su propia guitarra como un sacrificio ritual chamánico, cimentó una era dorada indiscutible.",
            en: "Rewrote the vocabulary of the electric guitar using overdriven amplification, controlled feedback, and effects pedals in ways never seen before. Before him, the guitar was played with restraint; after him, it became a living entity, capable of howling and mimicking exploding bombs (like his iconic Star Spangled Banner). His performances at Woodstock and Monterey, where he burned his guitar as a shamanic ritual sacrifice, cemented an undisputed golden era.",
            fr: "A réécrit le vocabulaire de la guitare électrique en utilisant une amplification saturée, un Larsen contrôlé et des pédales d'effets d'une manière inédite. Avant son arrivée, la guitare était jouée avec retenue; après lui, la guitare est devenue une entité vivante, capable de hurler. Ses performances à Woodstock et Monterey, où il a brûlé sa propre guitare comme un sacrifice chamanique, ont cimenté une époque dorée indiscutable."
        }
    },
    {
        id: "george-martin",
        name: "George Martin",
        role: {
            es: "Productor",
            en: "Producer",
            fr: "Producteur"
        },
        image: "https://en.wikipedia.org/wiki/Special:FilePath/Beatles_and_George_Martin_in_studio_1966.JPG?width=800",
        content: {
            es: "Conocido universalmente como el 'Quinto Beatle', transformó el frío estudio de grabación en un instrumento sinfónico en sí mismo. Su educación clásica en música, de modales refinados, chocó inicialmente con el desenfado rockero, pero pronto se fusionó para generar la magia detrás de Sgt. Pepper's Lonely Hearts Club Band. Pionero en técnicas arriesgadas de overdubbing magnético, loops de cinta manipulados y orquestación pop de vanguardia.",
            en: "Universally known as the 'Fifth Beatle', he transformed the cold recording studio into a symphonic instrument itself. His classically trained, refined-mannered musical education initially clashed with rock 'n' roll casualness, but soon merged to generate the magic behind Sgt. Pepper's. A pioneer in risky magnetic overdubbing techniques, manipulated tape loops, and avant-garde pop orchestration.",
            fr: "Universellement connu comme le 'Cinquième Beatle', il a transformé le froid studio d'enregistrement en un instrument symphonique en lui-même. Sa formation classique et ses manières raffinées ont rapidement fusionné avec le rock pour engendrer la magie de Sgt. Pepper's. Pionnier des techniques de surimpression magnétique, des boucles manipulées et de l'orchestration avant-gardiste pop."
        }
    },
    {
        id: "andy-warhol",
        name: "Andy Warhol",
        role: {
            es: "Manager y Artista Visual ('The Factory')",
            en: "Manager and Visual Artist ('The Factory')",
            fr: "Manager et Artiste Visuel ('The Factory')"
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/1920px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg",
        content: {
            es: "El sumo sacerdote del arte pop neoyorquino y el nihilismo estético. En su famoso estudio envuelto en papel de aluminio, The Factory, desdibujó las barreras entre el cine clandestino, la pintura y la música. Su audaz y a menudo cruel patrocinio a The Velvet Underground fusionó por primera vez y de forma indisoluble el mundo del arte contemporáneo y el rock subterráneo, todo mientras orquestaba los caóticos e inmersivos shows multimedia Exploding Plastic Inevitable.",
            en: "The high priest of New York pop art and aesthetic nihilism. In his famous aluminum-foiled studio, The Factory, he blurred the boundaries between underground film, painting, and music. His bold, and often cruel, sponsorship of The Velvet Underground indissolubly merged contemporary art and underground rock for the very first time, all while orchestrating the chaotic, immersive Exploding Plastic Inevitable multimedia shows.",
            fr: "Le grand prêtre du pop art new-yorkais et du nihilisme esthétique. Dans son célèbre studio enveloppé de papier d'aluminium, The Factory, il a brouillé les frontières entre le cinéma, la peinture et la musique. Son audacieux parrainage du Velvet Underground a fusionné l'art contemporain et le rock underground, tout en orchestrant les spectacles immersifs Exploding Plastic Inevitable."
        }
    },
    {
        id: "bob-dylan",
        name: "Bob Dylan",
        role: {
            es: "Cantautor y Poeta",
            en: "Singer-songwriter and Poet",
            fr: "Auteur-compositeur et Poète"
        },
        image: "https://en.wikipedia.org/wiki/Special:FilePath/Joan_Baez_Bob_Dylan_crop.jpg?width=800",
        content: {
            es: "La voz de una generación que no quería serlo. Traspasó las inquebrantables fronteras del folk tradicional y acústico escandalizando a los puristas cuando decidió enchufar sin previo aviso una estridente guitarra eléctrica en el festival de Newport de 1965. Llevó la poesía literaria profunda, ríspida y social directa a las letras del rock, obligando a los mismísimos gigantes Beatles a madurar líricamente tras conocerle.",
            en: "The voice of a generation that never asked to be one. He crushed the unbreakable boundaries of traditional acoustic folk, scandalizing purists by unabashedly plugging in a shrieking electric guitar at the 1965 Newport Folk Festival. He brought deep, harsh, and social literary poetry straight into rock lyricism, essentially forcing giants like The Beatles to mature lyrically after crossing paths with his mind.",
            fr: "La voix d'une génération qui ne voulait pas l'être. Il a franchi les frontières immuables de la scène folk acoustique traditionnelle en scandalisant les puristes lorsqu'il a branché une guitare électrique au festival de Newport de 1965. Il a apporté la poésie sociale et littéraire aux paroles rock, forçant même les Beatles à mûrir après avoir fait sa connaissance."
        }
    },
    {
        id: "brian-wilson",
        name: "Brian Wilson",
        role: {
            es: "Compositor y Arreglista",
            en: "Composer and Arranger",
            fr: "Compositeur et Arrangeur"
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Brian_Wilson_of_the_Beach_Boys_in_West_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg/1280px-Brian_Wilson_of_the_Beach_Boys_in_West_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg",
        content: {
            es: "El solitario y torturado genio tras la fachada surfera de los Beach Boys. El monumental artífice del disco 'Pet Sounds' (1966) y el mítico y frustrado 'SMiLE'. Tras sufrir crisis nerviosas asfixiantes en la carretera, se encerró de facto en su casa para elevar la música pop e infalible fórmula de los coros veraniegos a la categoría de música de cámara. Utilizando instrumentos orquestales exóticos, timbres poco convencionales como campanillas de bicicleta de niño o incluso los ladridos de sus propios perros, Wilson obligó a toda la industria de grabación a transformarse para intentar emparejar su visionario perfeccionismo emocional.",
            en: "The solitary, agonizing genius behind the sunny Beach Boys facade. The monumental architect of the 'Pet Sounds' (1966) LP and the mythical 'SMiLE' sessions. After suffering suffocating nervous breakdowns on tour, he effectively locked himself at home to elevate pop music formulas into chamber symphonies. Through exotic acoustic instruments, unconventional timbres like bicycle bells or his dogs barking, Wilson forced the recording industry to try and match his visionary emotional perfectionism.",
            fr: "Le génie solitaire et tourmenté derrière la façade surfeuse des Beach Boys. Le monumental créateur de l'album 'Pet Sounds' (1966) et du mythique projet avorté 'SMiLE'. Après des dépressions étouffantes en tournée, il s'est enfermé pour élever la formule pop d'été au rang de musique de chambre. Utilisant des instruments orchestraux exotiques et des timbres non conventionnels comme des aboiements, il a transformé l'industrie."
        }
    },
    {
        id: "lou-reed",
        name: "Lou Reed",
        role: {
            es: "Vocalista, Guitarrista y Compositor",
            en: "Vocalist, Guitarist and Composer",
            fr: "Chanteur, Guitariste et Compositeur"
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lou_Reed_1966%28cropped%29.jpg/600px-Lou_Reed_1966%28cropped%29.jpg",
        content: {
            es: "El cronista por excelencia de los bajos fondos empapados de asfalto y el alma lírica definitiva de The Velvet Underground. Sus composiciones desnudaron implacablemente y sin juicios moralistas las partes más oscuras, sexuales y adictivas de la vida marginal de Nueva York. Combinó esa honestidad poética brutal con un sonido inconfundible cimentado con afinaciones de guitarra peculiares, drones sostenidos y violas disonantes que sentaron de facto las crueles bases del rock alternativo y el punk post-moderno.",
            en: "The quintessential chronicler of the asphalt-soaked underworld and the definitive lyrical soul behind The Velvet Underground. His writing laid bare, with zero moral judgments, the darkest, most sexually charged, and addictive aspects of marginal New York life. He merged that brutal poetic honesty with a unique avant-garde sonic noise built on bizarre guitar tunings, sustained droning notes, and dissonant violas—setting the cruel foundation for post-modern alternative rock.",
            fr: "Le chroniqueur par excellence des bas-fonds gorgés de bitume de New York et l'âme du Velvet Underground. Ses compositions ont mis à nu impitoyablement, sans jugement moral, les parties les plus sombres, sexuelles et addictives de la vie marginale. Il a combiné cette honestidad poética brutal con un son característico aux accordages de guitare uniques jetant ainsi les bases impitoyables du post-punk."
        }
    },
    {
        id: "nico",
        name: "Nico",
        role: {
            es: "Modelo, Actriz y Cantante",
            en: "Model, Actress and Singer",
            fr: "Mannequin, Actrice et Chanteuse"
        },
        image: "https://en.wikipedia.org/wiki/Special:FilePath/Velvet_Underground_&_Nico_publicity_photo_(retouched)_(cropped).jpg",
        content: {
            es: "La gélida esfinge teutónica de laFactory, impuesta de malas ganas por Warhol para intentar equilibrar visualmente la oscuridad del primer disco de la Velvet Underground. Su inescrutable voz, de tonos de contralto tan carente de calidez y emoción superficial, le infundió al LP original una atmósfera atemporal y espectral. Después de su paso temporal por la banda, desarrolló una discografía vanguardista absolutamente inigualable tocando el armonio en discos escalofriantes como 'The Marble Index'.",
            en: "The icy Teutonic sphinx of The Factory, reluctantly imposed by Andy Warhol trying to visually soften the sheer darkness of The Velvet Underground's debut record. Her deep, inscrutable contralto voice, absolutely devoid of warm emotional sentimentality, lent the original LP its timeless, spectral, European gothic aura. After her brief stint with the band, she composed a fiercely uncompromising avant-garde discography led by her dirge-like harmonium playing on chilling records like 'The Marble Index'.",
            fr: "L'inflexible sphinx teutonique de la Factory, imposée par Warhol pour essayer d'équilibrer visuellement la noirceur du premier disque du Velvet Underground. Sa voix contralto impassible, sans aucune chaleur, a infusé l'album d'une aura gothique atemporelle. Plus tard, elle s'est lancée dans une carrière solo d'avant-garde intransigeante, jugando de l'harmonium sur des disques terrifiants comme 'The Marble Index'."
        }
    },
    {
        id: "edie-sedgwick",
        name: "Edie Sedgwick",
        role: {
            es: "Actriz y 'Superstar' de Factory",
            en: "Actress and Factory 'Superstar'",
            fr: "Actrice et 'Superstar' de la Factory"
        },
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Edie1.jpg/600px-Edie1.jpg",
        content: {
            es: "La ineludible e incandescente 'Youthquaker'. La primera y más brillante verdadera 'It Girl' y Superstar trágica de los sesenta. Niña rica de la oligarquía que cayó rendida ante el imán narcótico del underground de Manhattan, se volvió la musa indispensable casi parasitaria de Warhol hasta su distanciamiento por Dylan. Con sus mallas oscuras y pelo platinado ultracorto casi andrógino, su aura definió visual y conceptualmente toda la frenética escena pop de The Factory antes de su desgarrador e inevitable descenso destructivo a las sombras psiquiátricas y narcóticas.",
            en: "The inescapable and incandescent Youthquaker. The 1960s' first and brightest true tragic 'It Girl' and ultimate Factory Superstar. A wealthy heiress mesmerized by the narcotic magnet of the Manhattan underground, she became Warhol's indispensable, almost parasitic, cinematic muse before departing his orbit in favor of Dylan. Sporting black leotards and ultra-short androgynous platinum hair, her aura visually and conceptually defined the frantic pop scene of The Factory before her harrowing, inevitable destructive descent into psych wards and overdose.",
            fr: "L'inévitable et incandescente 'Youthquaker'. La toute première et véritable superstar tragique des années 60. Riche héritière fauchée par l'aimant narcissique de l'underground de Manhattan, elle est devenue la muse indispensable, presque rituelle, d'Andy Warhol. Avec ses collants noirs et ses cheveux platine androgynes, son aura a défini visuellement la scène de The Factory avant son inévitable descente aux enfers tragique dans la drogue."
        }
    }
];
