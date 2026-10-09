let map = L.map('map').setView([34.64422729243947, 135.04750539179463], 15);

// ▼ Googleマップのレイヤー（必要に応じてコメントアウトを外して使用してください）
/*
L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  attribution: "<a href='https://www.google.com/maps' target='_blank'>Google map</a>"
}).addTo(map);
*/

// ▼ OpenStreetMapのレイヤー（こちらを有効化しています）
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// ▼ マーカーの設定
L.marker([34.64415837079262, 135.04753014075297]).addTo(map)
    .bindPopup(`
        <img src="https://jocr.jp/wp/wp-content/uploads/2020/01/PC249649-800x600.jpg" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://www2.hyogo-c.ed.jp/weblog2/kobe-chs/" target="_blank">兵庫県立神戸商業高等学校（県商）</a>は日本一番歴史のある商業高校で、2026年にはDX授業の先駆けとして、大手前大学との連携授業で<a href="https://lovot.life/" target="_blank">LOVOT</a>を導入しました。
    `);
L.marker([34.670420691949914, 135.1442332023881]).addTo(map)
    .bindPopup(`
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Nagata-Commercial-HighSchool-2015080901.jpg?utm_source=ja.wikipedia.org&utm_campaign=index&utm_content=original" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://dmzcms.hyogo-c.ed.jp/nagata-chs/NC3/" target="_blank">兵庫県立長田商業高校</a>は県内唯一の定時制の商業高校で、生徒が主体となり実践的なビジネスや <a href="https://dmzcms.hyogo-c.ed.jp/nagata-chs/NC3/blogs/blog_entries/view/153/d2bd42a8461b9c9941f874a6018b9f50?frame_id=245" target="_blank">地域活動</a>などを学ぶことができます。
    `);
L.marker([34.705878993218974, 134.92171962649073]).addTo(map)
    .bindPopup(`
        <img src="https://akashi-juku-kyaria.com/WP/wp-content/uploads/2020/08/a-scaled.jpg" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://www.akashi-ch.ed.jp/about/cc.html" target="_blank">明石市立明石商業高校</a>は、商業科のほかに福祉科があり、<a href="https://school.js88.com/scl_h/school-news/yokikoto?news=1478" target="_blank">地域貢献活動</a>を行っています。
    `);
L.marker([34.82571888861203, 134.65706779580447]).addTo(map)
    .bindPopup(`
        <img src="https://i.kobe-np.co.jp/school/school-search/202509/img/b_19534143.jpg?a=302025141001" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://dmzcms.hyogo-c.ed.jp/himeji-chs/NC3/" target="_blank">兵庫県立姫路商業高校（姫商）</a>は、<a href="https://dmzcms.hyogo-c.ed.jp/himeji-chs/NC3/blogs/blog_entries/view/937/e84bdbbd73c5e5a5dea8001305d715a4?frame_id=1185&page_id=4/" target="_blank">令和8年熊本地震の募金を募る</a>など、震災関連に貢献しています。
    `);
    L.marker([34.752667325604186, 135.43600876377124]).addTo(map)
    .bindPopup(`
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Amagasaki_City_Amagasaki_Sousei_High_School.jpg?utm_source=ja.wikipedia.org&utm_campaign=index&utm_content=original" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://www.ama-net.ed.jp/school/H06/index.html" target="_blank">尼崎市立尼崎双星高等学校</a>は、<a href="https://air-ground.jp/blog/education/entry-93.html" target="_blank">ものづくり機械科・電気情報科</a>といった学科があり、実学や専門技術を深く学べます。
    `);
    L.marker([34.80259128789362, 134.45375714126885]).addTo(map)
    .bindPopup(`
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Aioi_Sangyo_High_School_01.jpg?utm_source=ja.wikipedia.org&utm_campaign=index&utm_content=original" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://dmzcms.hyogo-c.ed.jp/aioi-ihs/NC3/" target="_blank">兵庫県立相生産業高等学校</a>は、相生市の特産品（カキ殻など）を活用した<a href="https://www.hyogo-c.ed.jp/~aioi-ihs/indexpdf/0222.pdf" target="_blank">商品開発</a>や、アプリ開発プロジェクトなどに取り組んでいます。使えなくなった車椅子を修理して海外へ送る <a href="https://www.instagram.com/p/DXbSTwulNb6/" target="_blank">「空飛ぶ車いす事業」</a>など、社会貢献活動も盛んです。
    `);
    L.marker([34.68174987610303, 135.11692064234845]).addTo(map)
    .bindPopup(`
        <img src="https://cheers-school.com/wygfa/wp-content/uploads/image-172-22.jpg" style="width:100%; max-width:250px; border-radius:4px; margin-bottom:8px;"><br>
        <a href="https://www.seijoh.ac.jp/" target="_blank">神戸星城高校</a>は、県内唯一の私立の商業高校で、三木市には<a href="https://www.seijoh.ac.jp/01_1_02environment.html" target="_blank">神戸北キャンパス</a>があります。また<a href="https://www.seijoh.ac.jp/whatnew/view_detail.php?no=1816" target="_blank">体育大会</a>では体育館で行われて天候に左右されないようになっています。
    `);