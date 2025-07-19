let currentLanguage = 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    changeLanguage(currentLanguage);
}

function changeLanguage(lang) {
    const translations = {
        en: {
            "dark-mode":"🌙",
            /*button */
            "home-button": "home",
            "mall-button": "mall",
            "hotels-button": "hotels",
            "eat-button": "where to eat",
            "healthcare-button":"healthcare",
            "mosques-button" :"Mosques",
            "entertainment-button":"entertainment",
            /* home page */
            "about-webpage-title": "About this webpage",
            "about-page-text-1":"This page was created to be your comprehensive guide to everything related to Jubail, providing detailed information about the best places and services available in the city. Here, you'll find details about shopping malls, hotels, restaurants, healthcare facilities, mosques, and entertainment venues, helping you explore the city with ease.",
            "about-page-text-2":"Our goal is to provide a reliable resource that reflects the beauty and sophistication of Jubail, whether you're a resident or a visitor looking for a unique experience. We're constantly updating information to ensure you receive the most accurate details and the best recommendations.",
            "main-title": "Welcome to Jubail City",
            "about-title": "About Jubail",
            "about-text1":"During the Islamic era, Jubail served as a resting stop for traders and travelers moving between Gulf ports, gradually developing over the centuries. In 1933, an ancient water well known as Ain Jubail was discovered, marking an important historical site in the city.",
            "about-text": "Jubail, located on the Arabian Gulf coast in Saudi Arabia’s Eastern Province, is one of the oldest human settlements in the region, dating back over 7,000 years. In 1975, the city underwent a major transformation with the establishment of Jubail Industrial City, now the world’s largest industrial city, home to numerous petrochemical plants and oil refineries. This development has made Jubail a symbol of industry in Saudi Arabia and a key contributor to the nation’s economic diversification.",
            "map":"Explore Jubail on the Map",

            /* mall pageb */
            "shopping-title": "Shopping Malls in Jubail",
            
            "mall-name-1": "Galleria Mall",
            "mall-description-1": "Galleria Mall is considered one of the most prominent malls in Jubail and attracts visitors thanks to the variety of shops that offer international brands in clothing, accessories, cosmetics and electronics, such as H&M, CenterPoint, and others... It also contains many restaurants that offer local and international cuisine such as McDonald's, Manousha Al Reef, Starbucks, and others....",
            "mall-location-1": "Location: Jubail - Google Maps:",
            "mall-Features-1":"Features: It is located in the middle of the city and contains the best perfume shops.",
            "mall-Services-1":"Services: shops, restaurants, cafes, cosmetics shops",
            "mall-link-1":"Galleria Mall - Jubail",

            "mall-name-2": "Alfanatir Mall",
            "mall-description-2": "Fanateer Mall has been renovated and developed to become a premium shopping destination in Jubail. It now houses a wide range of stores including gold and accessories shops such as Al-Ghamdi Gold Shop, in addition to Abaya shops. It also houses many restaurants and cafes that offer a variety of options for visitors such as Subway, Cone Zone and entertainment areas for children such as Jumbo Lane, making it an ideal place for shopping and entertainment.",
            "mall-Features-2":"Features: It is modern and contains the latest shops, cafes, restaurants, and others.",
            "mall-Services-2":"Services: Gold shops, accessories, abayas, cafes, restaurants, entertainment.",
            "mall-link-2":": Fanateer Mall - Jubail",
            "mall-location-2": "Location: Jubail - Google Maps:",
            

            "mall-name-3": "Alhuwailat Mall",
            "mall-description-3": " Al-Huwailat Mall is a medium-sized mall in Jubail, featuring a variety of stores, including clothing and household items, as well as Hyper Panda and Jarir Bookstore. The mall also houses several cafes and restaurants, such as Burger King and Eamon, offering a variety of options for visitors. ",
            "mall-Features-3":"Features: It is close to the expressway leading to Dammam.",
            "mall-Services-3":"Services: Shops, Hyper Panda, Jarir Bookstore, Cafes, Restaurants.",
            "mall-link-3":"Alhuwailat Mall - Jubail",
            "mall-location-3": "Location: Jubail - Google Maps:",

            "mall-name-4": "Alfaiha Market",
            "mall-description-4": "This market is one of the most prominent popular markets in Jubail, featuring a variety of shops that cater to the needs of residents and visitors. Located in the Al-Faihaa neighborhood of Jubail Industrial City, the Al-Faihaa Market is a vibrant neighborhood that boasts numerous services and facilities.",
            "mall-Features-4":"Features: Al Fayhaa Market is distinguished by having all your daily needs in one place, from the simplest to the most complex things.",
            "mall-Services-4":"Services: Vegetable and fruit market, meat and fish market, restaurants and cafes, electrical and plumbing shops",
            "mall-link-4":"Alfaiha Market - Jubail",
            "mall-location-4": "Location: Jubail - Google Maps:",

            "mall-name-5": "Jubail Bay Mall",
            "mall-description-5": "Jubail Bay Mall is a modern shopping mall located in the Jubail Industrial City, Saudi Arabia. It is part of the Jubail Bay project, an integrated commercial and residential development on the city's waterfront. The mall houses a variety of local stores such as Abdul Samad Al Qurashi and international brands such as Balmain, as well as a wide range of restaurants and cafes such as Starbucks and many others (the complex is still new, and many more stores will open in time).",
            "mall-Features-5":"Features: The largest closed complex in the city, wonderful sea view, includes a ship port",
            "mall-Services-5":"Services: Restaurants, Cafes, Clothing Stores, Perfumes",
            "mall-link-5":"Jubail Bay Mall - Jubail",
            "mall-location-5": "Location: Jubail - Google Maps:",

            /*hotels page*/
            "hotels-title": "Best Hotels in Jubail",

            "hotel-name-1": "Park Inn by Radisson Jubail Industrial",
            "hotel-price-1": "💰💰💰 (Medium)",
            "hotel-description-1": "Located near Najd Park and Jubail Corniche, offering comfortable rooms with free Wi-Fi and parking. Close to shopping and entertainment centers.",
            "hotel-location-1": "Location on Google Maps",
            "hotel-link-1": "Park Inn by Radisson Jubail Industrial",
            "hotel-more-1": "For booking and inquiries",
          
            "hotel-name-2": "Coral Jubail Hotel",
            "hotel-price-2": "💰💰💰 (Medium)",
            "hotel-description-2": "A modern hotel by the sea, offering a panoramic dining experience with views of the Arabian Gulf. Elegantly furnished rooms with contemporary décor.",
            "hotel-location-2": "Location on Google Maps",
            "hotel-link-2": "Coral Jubail Hotel",
            "hotel-more-2": "For booking and inquiries",
          
            "hotel-name-3": "Intercontinental Jubail Hotel",
            "hotel-price-3": "💰💰💰 (Medium)",
            "hotel-description-3": "A modern hotel by the sea, offering a panoramic dining experience with views of the Arabian Gulf. Elegantly furnished rooms with contemporary décor.",
            "hotel-location-3": "Location on Google Maps",
            "hotel-link-3": "Intercontinental Jubail Hotel",
            "hotel-more-3": "For booking and inquiries",
          
            "hotel-name-4": "Boudl Jubail Hotel",
            "hotel-price-4": "💰💰💰 (Medium)",
            "hotel-description-4": "Located on the Arabian Gulf coast in Jubail Industrial City, near major attractions such as beaches, parks, and shopping centers. 6 km from Najd Park and Al Dhafair Park, and 8 km from Al Shurooq Entertainment Park.",
            "hotel-location-4": "Location on Google Maps",
            "hotel-link-4": "Boudl Jubail Hotel",
            "hotel-more-4": "For booking and inquiries",
          
            "hotel-name-5": "Holiday Inn & Suites - Jubail",
            "hotel-price-5": "💰💰💰 (Medium)",
            "hotel-description-5": "Located just a 5-minute walk from Taibah Beach and about an hour from King Fahd International Airport, offering modern rooms and suites suitable for families and business travelers.",
            "hotel-location-5": "Location on Google Maps",
            "hotel-link-5": "Holiday Inn & Suites - Jubail",
            "hotel-more-5": "For booking and inquiries",
          
            "hotel-name-6": "Durrat Jalmouda Hotel",
            "hotel-price-6": "💰💰💰 (Medium)",
            "hotel-description-6": "Situated in Jubail, 5.9 km from Al Dafi Park, featuring an outdoor pool, free private parking, a fitness center, and a restaurant.",
            "hotel-location-6": "Location on Google Maps",
            "hotel-link-6": "Durrat Jalmouda Hotel",
            "hotel-more-6": "For booking and inquiries",
          
            "hotel-name-7": "Warwick Al Jubail Hotel",
            "hotel-price-7": "💰💰💰 (Medium)",
            "hotel-description-7": "Located 4.6 km from Najd Park, this hotel offers a terrace, free private parking, a restaurant, and a bar. A 4-star hotel with business facilities and concierge service, providing free Wi-Fi, a 24-hour front desk, airport transfers, and room service.",
            "hotel-location-7": "Location on Google Maps",
            "hotel-link-7": "Warwick Al Jubail Hotel",
            "hotel-more-7": "For booking and inquiries",
          
            "hotel-name-8": "Karan Hotel",
            "hotel-price-8": "💰💰💰 (Medium)",
            "hotel-description-8": "This upscale hotel is near the Gulf, surrounded by businesses and restaurants, and is a 14-minute walk from Fanateer Corniche Park. The hotel is 103 km from King Fahd International Airport.",
            "hotel-location-8": "Location on Google Maps",
            "hotel-link-8": "Karan Hotel",
            "hotel-more-8": "For booking and inquiries",
            
             /* place to eat page*/
            "eat-title":"places to eat",

             /* mosques page*/
"mosques-title": "Mosques",
    "mosques-name-1": "Al-Farooq Mosque",
    "mosques-description-1": "Al-Farooq Mosque is considered one of the most prominent and largest mosques in Jubail Industrial City. It features an architectural design that combines classical Islamic styles with modern touches, making it a spiritual and aesthetic landmark in the city. It welcomes a large number of worshippers during daily prayers and religious occasions.",
    "mosques-size-1": "Size: One of the largest mosques in Jubail Industrial City, accommodating a significant number of worshippers.",
    "mosques-location-1": "Location on Google Maps",
    "mosques-link-1": "Al-Farooq Mosque",

    "mosques-name-2": "Dr. Ghazi Al-Qusaibi Mosque",
    "mosques-description-2": "A modern mosque named in honor of Dr. Ghazi Al-Qusaibi. It features a simple and elegant design that reflects the contemporary beauty of Islamic architecture. The mosque provides a calm and spiritual atmosphere for worshippers and is located near the new SABIC building, making it distinctive in terms of location.",
    "mosques-size-2": "Size: Medium-sized with a geometric design that comfortably accommodates worshippers.",
    "mosques-location-2": "Location on Google Maps",
    "mosques-link-2": "Dr. Ghazi Al-Qusaibi Mosque",

    "mosques-name-3": "Anas Bin Malik Mosque",
    "mosques-description-3": "Anas Bin Malik Mosque is characterized by its elegance and spirituality, serving as a vibrant center for worship and religious activities in the Al-Huwailat neighborhood. The mosque is carefully designed to combine comfort and simplicity, attracting local residents for prayers.",
    "mosques-size-3": "Size: Spacious and accommodates a large number of worshippers.",
    "mosques-location-3": "Location on Google Maps",
    "mosques-link-3": "Anas Bin Malik Mosque",

    "mosques-name-4": "Taiba Mosque",
    "mosques-description-4": "Taiba Mosque enjoys a tranquil atmosphere and a simple yet elegant architectural design, providing worshippers with a unique spiritual experience. This mosque is one of the ideal options for residents seeking comfort and peace during their prayers.",
    "mosques-size-4": "Size: Medium-sized, with a suitable space to meet the needs of worshippers.",
    "mosques-location-4": "Location on Google Maps",
    "mosques-link-4": "Taiba Mosque",

    "mosques-name-5": "Al-Reihan Mosque",
    "mosques-description-5": "Al-Rehan Mosque is known for its attractive design and spacious area, making it a favorite destination for local residents to perform prayers. The mosque is famous for its large capacity during Friday prayers and special occasions, providing a unique spiritual atmosphere.",
    "mosques-size-5": "Size: Large and accommodates a significant number of worshippers.",
    "mosques-location-5": "Location on Google Maps",
    "mosques-link-5": "Al-Reihan Mosque"
        },

        ar: {
           /*button */
            "home-button": "الرئيسية",
            "mall-button": "مراكز التسوق",
            "hotels-button": "الفنادق",
            "eat-button": " الاكل",
            "healthcare-button":"الصحة",
            "mosques-button" :"المساجد",
            "entertainment-button":" الترفيه",
           
            /* home page */
            "about-webpage-title": " عن هذه الصفحة ",
            "about-page-text-1":"تم إنشاء هذه الصفحة لتكون دليلك الشامل لكل ما يخص مدينة الجبيل، حيث نقدم معلومات دقيقة حول أفضل الأماكن والخدمات المتاحة في المدينة. ستجد هنا تفاصيل عن مراكز التسوق، الفنادق، المطاعم، المرافق الصحية، المساجد، وأماكن الترفيه، مما يساعدك في استكشاف المدينة بسهولة.",
            "about-page-text-2":"هدفنا هو توفير مصدر موثوق يعكس جمال وتطور الجبيل، سواء كنت من سكانها أو زائرًا يبحث عن تجربة مميزة. نحرص على تحديث المعلومات باستمرار لضمان حصولك على أدق التفاصيل وأفضل التوصيات.",
            "main-title": "مرحبًا بكم في مدينة الجبيل",
            "about-title": " عن مدينة الجبيل ",
            "about-text":"تُعدُّ مدينة الجبيل من أقدم المدن الساحلية في المملكة العربية السعودية، حيث يعود تاريخها إلى أكثر من 7,000 عام .كانت تُعرف قديمًا بأنها مركزٌ مهمٌ للصيد والتجارة البحرية، نظرًا لموقعها الاستراتيجي على ساحل الخليج العربي ",
            "about-text1":"في العصور الإسلامية، كانت الجبيل محطة استراحة للتجار والمسافرين بين الموانئ الخليجية، وشهدت تطورًا تدريجيًا حتى العصر الحديث.  في عام 1933، تم اكتشاف بئر ماء قديمة تُعرف باسم عين الجبيل، والتي تُعد من العلامات التاريخية للمدينة",
           
            "map":"استكشف الجبيل على الخريطة",
           
            /* mall pageb */
            "shopping-title": "مراكز التسوق في الجبيل",

            "mall-name-1": "غاليريا مول ",
            "mall-description-1": "يُعتبر غاليريا مول من أبرز المولات في الجبيل ويستقطب الزوار بفضل تنوع المحلات التجارية التي تقدم الماركات العالمية في الملابس والإكسسوارات ومستحضرات التجميل والإلكترونيات, مثل محل درعة H&M,CenterPoint, وغيرهم... . كما يحتوي على العديد من المطاعم التي تقدم المأكولات المحلية والعالمية مثل ماكدونالدز و منؤوشة الريف وستاربكس وغيرها....",
            "mall-location-1": "الموقع على خرائط جوجل ",
            "mall-Features-1":"المميزات: يتميز بموقعه الذي يقع بوسط المدينة واحتواءه على افضل متاجر العطور ",
            "mall-Services-1":"الخدمات: محلات تجارية، مطاعم، مقاهي، محلات مستحضرات تجميل.",
            "mall-link-1":"غاليريا مول - الجبيل",

            "mall-name-2": "الفناتير مول",
            "mall-description-2": "تم تجديد وتطوير الفناتير مول ليصبح وجهة تسوق متميزة في الجبيل. يضم الآن مجموعة واسعة من المتاجر بما في ذلك محلات الذهب والإكسسوارات مثل محل الغامدي للذهب، بالإضافة إلى محلات العبايات. كما يضم العديد من المطاعم والمقاهي التي تقدم خيارات متنوعة للزوار مثل صب واي, كون زون وأماكن ترفيهية للأطفال مثل جامبو لين مما يجعله مكانًا مثاليًا للتسوق والترفيه.",
            "mall-Features-2":"المميزات: يتميز بحداثته واحتوائه على احدث المحلات من المقاهي والمطاعم وغيرها",
            "mall-Services-2":" الخدمات: محلات تجارية، مطاعم، مقاهي، محلات مستحضرات تجميل.",
            "mall-link-2":" الفناتير مول - الجبيل",
            "mall-location-2": "الموقع على خرائط جوجل ",
            

            "mall-name-3": "الحويلات مول",
            "mall-description-3": "يُعد الحويلات مول من المولات المتوسطة الحجم في الجبيل، ويتميز بوجود محلات متنوعة تشمل ملابس، مستلزمات منزلية، بالإضافة إلى هايبر بنده وجرير. كما يحتوي المول على بعض المقاهي والمطاعم مثل برجر كنج وايمون التي تقدم خيارات متنوعة للزوار.",
            "mall-Features-3":"المميزات: يتميز بقربة من الخط السريع المؤدي الى الدمام ",
            "mall-Services-3":" الخدمات: محلات تجارية، هايبر بندة، مكتبة جرير، مقاهي، مطاعم.",
            "mall-link-3":"الحويلات مول  - الجبيل " ,
            "mall-location-3": "الموقع على خرائط جوجل ",

            "mall-name-4": "سوق الفيحاء",
            "mall-description-4": " يُعد هذا السوق من أبرز الأسواق الشعبية في مدينة الجبيل، حيث يضم مجموعة متنوعة من المحلات التجارية التي تلبي احتياجات السكان والزوار. يقع سوق الفيحاء في حي الفيحاء بمدينة الجبيل الصناعية، وهو من الأحياء الحيوية التي تضم العديد من الخدمات والمرافق",
            "mall-Features-4":"المميزات: يتميز سوق الفيحاء بوجود جميع احتياجاتك اليومية في مكان واحد من ابسط الأشياء الى أعقدها.",
            "mall-Services-4":"الخدمات: سوق الخضروات والفواكة, سوق اللحوم والأسماك, المطاعم والمقاهي, محلات الكهرباء والسباكة",
            "mall-link-4":" سوق الفيحاء - الجبيل",
            "mall-location-4": "الموقع على خرائط جوجل ",

            "mall-name-5": "Jubail Bay Mall",
            "mall-description-5": " الجبيل باي مول هو مركز تسوّق حديث يقع في مدينة الجبيل الصناعية بالمملكة العربية السعودية. يُعد جزءًا من مشروع  جبيل باي، الذي يُعتبر تطويرًا تجاريًا وسكنيًا متكاملًا على الواجهة البحرية للمدينة. يضم المول مجموعة متنوعة من المتاجر المحلية مثل عبدالصمد القرشي والعالمية مثل بالمان، بالإضافة إلى خيارات متعددة من المطاعم والمقاهي مثل ستاربكس وغيرها الكثير(المجمع لازال جديد وع الزمن سيتم افتتاح العديد من المتاجر الأخرى).",
            "mall-Features-5":"المميزات: أكبر مجمع مغلق في المدينة, اطلالة رائعة على البحر, يضم ميناء للسفن",
            "mall-Services-5":"الخدمات: المطاعم, المقاهي, محلات ملابس, عطور",
            "mall-link-5":"الجبيل باي مول - الجبيل ",
            "mall-location-5": "الموقع على خرائط جوجل ",
            /*hotels page*/
            "hotels-title": "أفضل الفنادق في الجبيل",
           
            "hotel-name-1": " بارك إن راديسون الجبيل الصناعية ",
            "hotel-price-1":"💰💰💰 (متوسط)",
            "hotel-description-1": " يقع بالقرب من حديقة نجد وكورنيش الجبيل، ويوفر غرفًا مريحة مع واي فاي وموقف سيارات مجاني، كما أنه قريب من مراكز التسوق والترفيه." ,
            "hotel-location-1": " الموقع على خرائط جوجل",
            "hotel-link-1":"بارك إن راديسون الجبيل الصناعية ",
            "hotel-more-1" : "للحجز والاستفسار ",

            "hotel-name-2": "  فندق كورال الجبيل " ,
            "hotel-price-2":"💰💰💰 (متوسط)",
            "hotel-description-2": "فندق حديث يقع بجوار البحر، ويوفر تجربة طعام بانورامية بإطلالات على الخليج العربي. الغرف مؤثثة بأناقة مع ديكور عصري",
            "hotel-location-2": " الموقع على خرائط جوجل",
            "hotel-link-2":"فندق كورال الجبيل ",
            "hotel-more-2" : "للحجز والاستفسار ",

            "hotel-name-3": " فندق إنتركونتيننتال الجبيل ",
            "hotel-price-3":"💰💰💰 (متوسط)",
            "hotel-description-3": " فندق حديث يقع بجوار البحر، ويوفر تجربة طعام بانورامية بإطلالات على الخليج العربي. الغرف مؤثثة بأناقة مع ديكور عصري",
            "hotel-location-3": " الموقع على خرائط جوجل",
            "hotel-link-3":" فندق إنتركونتيننتال الجبيل ",
            "hotel-more-3" : "للحجز والاستفسار ",

            "hotel-name-4": " فندق بودل الجبيل ",
            "hotel-price-4":"💰💰💰 (متوسط)",
            "hotel-description-4": "يقع فندق بودل الجبيل على ساحل الخليج العربي في مدينة الجبيل الصناعية، بالقرب من المعالم السياحية الرئيسية مثل الشواطئ والحدائق ومراكز التسوق، ويقع الفندق على بعد 6 كم من منتزه نجد وحديقة الظفير، وعلى بعد 8 كم من منتزه الشروق الترفيهي",
            "hotel-location-4": " الموقع على خرائط جوجل",
            "hotel-link-4":"فندق بودل الجبيل ",
            "hotel-more-4" : "للحجز والاستفسار ",

            "hotel-name-5": " هوليداي إن آند سويتس - الجبيل " ,
            "hotel-price-5":"💰💰💰 (متوسط)",
            "hotel-description-5": " يقع الفندق على بعد 5 دقائق سيرًا على الأقدام من شاطئ طيبة وحوالي ساعة من مطار الملك فهد الدولي، ويوفر غرفًا وأجنحة حديثة تناسب العائلات ورجال الأعمال",
            "hotel-location-5": " الموقع على خرائط جوجل",
            "hotel-link-5":"هوليداي إن آند سويتس - الجبيل ",
            "hotel-more-5" : "للحجز والاستفسار ",

            "hotel-name-6": "فندق درة جلمودة " ,
            "hotel-price-6":"💰💰💰 (متوسط)",
            "hotel-description-6": "يقع مكان إقامة Durrat Jalmouda Hotel في الجبيل، على بعد 5.9 كم من حديقة الدفي، ويتميز بمسبح خارجي ومواقف خاصة للسيارات مجاناً ومركز للياقة البدنية ومطعم",
            "hotel-location-6": " الموقع على خرائط جوجل",
            "hotel-link-6":"فندق درة جلمودة ",
            "hotel-more-6" : "للحجز والاستفسار ",

            "hotel-name-7": " فندق ورويك الجبيل " ,
            "hotel-price-7":"💰💰💰 (متوسط)",
            "hotel-description-7": " يقع Warwick Al Jubail Hotel في الجبيل، وعلى بُعد 4.6 كم من منتزه نجد، وهو مكان إقامة يضم تراس ومواقف خاصة للسيارات مجاناً ومطعماً وبار، كما يوفر هذا الفندق المصنف 4 نجوم مركزاً للأعمال وخدمة الكونسيرج، فيما يوفر مكان الإقامة خدمة الواي فاي مجاناً في جميع أنحائه ومكتباً للاستقبال يعمل على مدار الساعة وخدمات نقل المطار وخدمة الغرف.",
            "hotel-location-7": " الموقع على خرائط جوجل",
            "hotel-link-7":"فندق ورويك الجبيل ",
            "hotel-more-7" : "للحجز والاستفسار ",

            "hotel-name-8": " فندق كران " ,
            "hotel-price-8":"💰💰💰 (متوسط)",
            "hotel-description-8": "  يقع هذا الفندق الراقي بالقرب من الخليج ووسط الشركات والمطاعم، ويبعُد 14 دقيقة سيرًا على الأقدام عن منطقة  كورنيش الفناتير المكسوة بالعشب. ويبعد الفندق 103 كيلومتر عن مطار الملك فهد الدولي.",
            "hotel-location-8": " الموقع على خرائط جوجل",
            "hotel-link-8":"فندق كران ",
            "hotel-more-8" : "للحجز والاستفسار ",
            
            
  
           /* place to eat*/
            "eat-title":"أماكن لتناول الطعام",

            /* mosques page*/
            "mosques-title":"المساجد",
            "mosques-name-1":" جامع الفاروق ",
            "mosques-description-1":"جامع الفاروق يُعتبر من أبرز وأكبر الجوامع في الجبيل الصناعية. يتميز بتصميم معماري يجمع بين الطراز الإسلامي الكلاسيكي واللمسات الحديثة، مما يجعله معلمًا روحانيًا وجماليًا في المدينة. يستقبل أعدادًا كبيرة من المصلين خلال الأوقات اليومية والمناسبات الدينية.",
            "mosques-size-1":"الحجم: من أكبر الجوامع في الجبيل الصناعية، ويتسع لعدد كبير من المصلين.",
            "mosques-location-1":"الموقع على خرائط جوجل",
            "mosques-link-1":"جامع الفاروق ",
            
            "mosques-name-2":" جامع الدكتور غازي القصيبي ",
            "mosques-description-2":"جامع حديث تم تسميته تكريمًا للدكتور غازي القصيبي. يتميز بتصميم بسيط وأنيق يعكس الجمال العصري للعمارة الإسلامية. الجامع يوفر أجواءً هادئة وروحانية للمصلين، ويقع بالقرب من مبنى سابك الجديد، مما يجعله مميزًا من حيث الموقع.",
            "mosques-size-2":"•الحجم: متوسط الحجم مع تصميم هندسي يستوعب المصلين بشكل مريح.",
            "mosques-location-2":"الموقع على خرائط جوجل",
            "mosques-link-2":"جامع الدكتور غازي القصيبي ",
 
            "mosques-name-3":" جامع أنس بن مالك ",
            "mosques-description-3":"يتميز جامع أنس بن مالك بأناقته وروحانيته، حيث يُعد مركزًا حيويًا للعبادة والأنشطة الدينية في حي الحويلات. الجامع مصمم بعناية ليجمع بين الراحة والبساطة، مما يجذب سكان الحي للصلاة فيه.",
            "mosques-size-3":"•الحجم: واسع ويتسع لأعداد كبيرة من المصلين",
            "mosques-location-3":"الموقع على خرائط جوجل",
            "mosques-link-3":"جامع أنس بن مالك ",
 
            "mosques-name-4":" جامع طيبة ",
            "mosques-description-4":"جامع طيبة يتمتع بأجواء هادئة وتصميم معماري بسيط ولكنه أنيق، يوفر للمصلين تجربة روحانية مميزة. يعد هذا الجامع من الخيارات المثالية للسكان الباحثين عن الراحة والسكينة خلال أداء صلواتهم",
            "mosques-size-4":" •الحجم: متوسط الحجم، مع مساحة مناسبة تلبي احتياجات المصلين.",
            "mosques-location-4":"الموقع على خرائط جوجل",
            "mosques-link-4":"جامع طيبة ",
 
            "mosques-name-5":" جامع الريحان ",
            "mosques-description-5":"جامع الريحان يتميز بتصميمه الجذاب ومساحته الواسعة، مما يجعله وجهة مفضلة لسكان الحي لأداء الصلاة. يشتهر الجامع باستيعابه الكبير خلال صلاة الجمعة والمناسبات، مع توفير أجواء روحانية مميزة.",
            "mosques-size-5":"•الحجم: كبير ويتسع لعدد كبير من المصلين",
            "mosques-location-5":"الموقع على خرائط جوجل",
            "mosques-link-5":" جامع الريحان ",
            "dark-mode":"🌙",
        }
    };

    const data = translations[lang];
    Object.keys(data).forEach(key => {
        if (key === 'dark-mode') return; // Preserve current dark mode icon
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(el => {
            el.textContent = data[key];
        });
    });

    // تغيير اتجاه الصفحة بناءً على اللغة
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    updateDarkModeToggle();
}

// Default language setup
changeLanguage('ar');

// Language buttons

const langButtons = document.querySelectorAll(".lang-button");
langButtons.forEach(button => {
    button.addEventListener("click", function() {
        const newLang = this.dataset.lang;
        changeLanguage(newLang);
    });
});
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

function updateDarkModeToggle() {
    toggleButton.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
}

toggleButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    updateDarkModeToggle();
});

