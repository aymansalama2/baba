import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [repetitionCount, setRepetitionCount] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (repetitionCount < 72) {
      setRepetitionCount(repetitionCount + 1);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    videoRef.current.addEventListener('ended', handleVideoEnded);

    return () => {
      videoRef.current.removeEventListener('ended', handleVideoEnded);
    };
  }, [repetitionCount]);

  return (
    <div className="App">
      <header className="App-header  text-white p-4 text-center">
        <h1 className="text-gold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
        <br />
        <video ref={videoRef} className="w-100 max-width-800 mb-4" controls>
          <source src="1.mp4" type="video/mp4" />
        </video>
        <p className="text-success">Répétitions restantes : {72 - repetitionCount}</p>
      </header>
      <div className="text-dark ">
       بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِإِذَا وَقَعَتِ الْوَاقِعَةُ1لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ2خَافِضَةٌ رَافِعَةٌ3إِذَا رُجَّتِ الْأَرْضُ رَجًّا4وَبُسَّتِ الْجِبَالُ بَسًّا5فَكَانَتْ هَبَاءً مُنْبَثًّا6وَكُنْتُمْ أَزْوَاجًا ثَلَاثَةً7فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ8وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ9وَالسَّابِقُونَ السَّابِقُونَ10أُولَٰئِكَ الْمُقَرَّبُونَ11فِي جَنَّاتِ النَّعِيمِ12ثُلَّةٌ مِنَ الْأَوَّلِينَ13وَقَلِيلٌ مِنَ الْآخِرِينَ14عَلَىٰ سُرُرٍ مَوْضُونَةٍ15مُتَّكِئِينَ عَلَيْهَا مُتَقَابِلِينَ16يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُخَلَّدُونَ17بِأَكْوَابٍ وَأَبَارِيقَ وَكَأْسٍ مِنْ مَعِينٍ18لَا يُصَدَّعُونَ عَنْهَا وَلَا يُنْزِفُونَ19وَفَاكِهَةٍ مِمَّا يَتَخَيَّرُونَ20وَلَحْمِ طَيْرٍ مِمَّا يَشْتَهُونَ21وَحُورٌ عِينٌ22كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ23جَزَاءً بِمَا كَانُوا يَعْمَلُونَ24لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا25إِلَّا قِيلًا سَلَامًا سَلَامًا26وَأَصْحَابُ الْيَمِينِ مَا أَصْحَابُ الْيَمِينِ27فِي سِدْرٍ مَخْضُودٍ28وَطَلْحٍ مَنْضُودٍ29وَظِلٍّ مَمْدُودٍ30وَمَاءٍ مَسْكُوبٍ31وَفَاكِهَةٍ كَثِيرَةٍ32لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ33وَفُرُشٍ مَرْفُوعَةٍ34إِنَّا أَنْشَأْنَاهُنَّ إِنْشَاءً35فَجَعَلْنَاهُنَّ أَبْكَارًا36عُرُبًا أَتْرَابًا37لِأَصْحَابِ الْيَمِينِ38ثُلَّةٌ مِنَ الْأَوَّلِينَ39وَثُلَّةٌ مِنَ الْآخِرِينَ40وَأَصْحَابُ الشِّمَالِ مَا أَصْحَابُ الشِّمَالِ41فِي سَمُومٍ وَحَمِيمٍ42وَظِلٍّ مِنْ يَحْمُومٍ43لَا بَارِدٍ وَلَا كَرِيمٍ44إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُتْرَفِينَ45وَكَانُوا يُصِرُّونَ عَلَى الْحِنْثِ الْعَظِيمِ46وَكَانُوا يَقُولُونَ أَئِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَإِنَّا لَمَبْعُوثُونَ47أَوَآبَاؤُنَا الْأَوَّلُونَ48قُلْ إِنَّ الْأَوَّلِينَ وَالْآخِرِينَ49لَمَجْمُوعُونَ إِلَىٰ مِيقَاتِ يَوْمٍ مَعْلُومٍ50ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ51لَآكِلُونَ مِنْ شَجَرٍ مِنْ زَقُّومٍ52فَمَالِئُونَ مِنْهَا الْبُطُونَ53فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ54فَشَارِبُونَ شُرْبَ الْهِيمِ55هَٰذَا نُزُلُهُمْ يَوْمَ الدِّينِ56نَحْنُ خَلَقْنَاكُمْ فَلَوْلَا تُصَدِّقُونَ57أَفَرَأَيْتُمْ مَا تُمْنُونَ58أَأَنْتُمْ تَخْلُقُونَهُ أَمْ نَحْنُ الْخَالِقُونَ59نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ60عَلَىٰ أَنْ نُبَدِّلَ أَمْثَالَكُمْ وَنُنْشِئَكُمْ فِي مَا لَا تَعْلَمُونَ61وَلَقَدْ عَلِمْتُمُ النَّشْأَةَ الْأُولَىٰ فَلَوْلَا تَذَكَّرُونَ62أَفَرَأَيْتُمْ مَا تَحْرُثُونَ63أَأَنْتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ64لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا فَظَلْتُمْ تَفَكَّهُونَ65إِنَّا لَمُغْرَمُونَ66بَلْ نَحْنُ مَحْرُومُونَ67أَفَرَأَيْتُمُ الْمَاءَ الَّذِي تَشْرَبُونَ68أَأَنْتُمْ أَنْزَلْتُمُوهُ مِنَ الْمُزْنِ أَمْ نَحْنُ الْمُنْزِلُونَ69لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ70أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ71أَأَنْتُمْ أَنْشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنْشِئُونَ72نَحْنُ جَعَلْنَاهَا تَذْكِرَةً وَمَتَاعًا لِلْمُقْوِينَ73فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ74فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ75وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ76إِنَّهُ لَقُرْآنٌ كَرِيمٌ77فِي كِتَابٍ مَكْنُونٍ78لَا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ79تَنْزِيلٌ مِنْ رَبِّ الْعَالَمِينَ80أَفَبِهَٰذَا الْحَدِيثِ أَنْتُمْ مُدْهِنُونَ81وَتَجْعَلُونَ رِزْقَكُمْ أَنَّكُمْ تُكَذِّبُونَ82فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ83وَأَنْتُمْ حِينَئِذٍ تَنْظُرُونَ84وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْكُمْ وَلَٰكِنْ لَا تُبْصِرُونَ85فَلَوْلَا إِنْ كُنْتُمْ غَيْرَ مَدِينِينَ86تَرْجِعُونَهَا إِنْ كُنْتُمْ صَادِقِينَ87فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ88فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ89وَأَمَّا إِنْ كَانَ مِنْ أَصْحَابِ الْيَمِينِ90فَسَلَامٌ لَكَ مِنْ أَصْحَابِ الْيَمِينِ91وَأَمَّا إِنْ كَانَ مِنَ الْمُكَذِّبِينَ الضَّالِّينَ92فَنُزُلٌ مِنْ حَمِيمٍ93وَتَصْلِيَةُ جَحِيمٍ94إِنَّ هَٰذَا لَهُوَ حَقُّ الْيَقِينِ95فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ96
      </div><br /><br /><br /><br />
      <div className="islamic-footer bg-success text-white text-center p-2 fixed-bottom">
        <p>تصميم إسلامي - جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
}

export default App;
