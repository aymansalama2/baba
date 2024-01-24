import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [repetitionCount1, setRepetitionCount1] = useState(0);
  const [repetitionCount2, setRepetitionCount2] = useState(0);
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoEnded1 = () => {
    if (repetitionCount1 < 72) {
      setRepetitionCount1(repetitionCount1 + 1);
      videoRef1.current.currentTime = 0;
      videoRef1.current.play();
    }
  };

  const handleVideoEnded2 = () => {
    if (repetitionCount2 < 72) {
      setRepetitionCount2(repetitionCount2 + 1);
      videoRef2.current.currentTime = 0;
      videoRef2.current.play();
    }
  };

  useEffect(() => {
    videoRef1.current.addEventListener('ended', handleVideoEnded1);
    videoRef2.current.addEventListener('ended', handleVideoEnded2);

    return () => {
      videoRef1.current.removeEventListener('ended', handleVideoEnded1);
      videoRef2.current.removeEventListener('ended', handleVideoEnded2);
    };
  }, [repetitionCount1, repetitionCount2]);

  return (
    <div className="App">
      <header className="App-header text-white p-4 text-center">
        <h1 className="text-gold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
        <br />
        <video ref={videoRef1} className="w-100 max-width-800 mb-4" controls>
          <source src="2.mp4" type="video/mp4" />
        </video>
        <p className="text-success">Répétitions restantes (vidéo 1) : {72 - repetitionCount1}</p>

        <video ref={videoRef2} className="w-100 max-width-800 mb-4 bg-dark" controls>
          <source src="4.mp4" type="video/mp4" />
        </video>
        <p className="text-success">Répétitions restantes (vidéo 2) : {72 - repetitionCount2}</p>
      </header>
      <div className="text-dark ">
      وَٱلسَّمَآءِ ذَاتِ ٱلْبُرُوجِ ١ وَٱلْيَوْمِ ٱلْمَوْعُودِ ٢ وَشَاهِدٍۢ وَمَشْهُودٍۢ ٣ قُتِلَ أَصْحَـٰبُ ٱلْأُخْدُودِ ٤ ٱلنَّارِ ذَاتِ ٱلْوَقُودِ ٥ إِذْ هُمْ عَلَيْهَا قُعُودٌۭ ٦ وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِٱلْمُؤْمِنِينَ شُهُودٌۭ ٧ وَمَا نَقَمُوا۟ مِنْهُمْ إِلَّآ أَن يُؤْمِنُوا۟ بِٱللَّهِ ٱلْعَزِيزِ ٱلْحَمِيدِ ٨ ٱلَّذِى لَهُۥ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدٌ ٩ إِنَّ ٱلَّذِينَ فَتَنُوا۟ ٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَـٰتِ ثُمَّ لَمْ يَتُوبُوا۟ فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ ٱلْحَرِيقِ ١٠ إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَهُمْ جَنَّـٰتٌۭ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْكَبِيرُ ١١ إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ ١٢ إِنَّهُۥ هُوَ يُبْدِئُ وَيُعِيدُ ١٣ وَهُوَ ٱلْغَفُورُ ٱلْوَدُودُ ١٤ ذُو ٱلْعَرْشِ ٱلْمَجِيدُ ١٥ فَعَّالٌۭ لِّمَا يُرِيدُ ١٦ هَلْ أَتَىٰكَ حَدِيثُ ٱلْجُنُودِ ١٧ فِرْعَوْنَ وَثَمُودَ ١٨ بَلِ ٱلَّذِينَ كَفَرُوا۟ فِى تَكْذِيبٍۢ ١٩ وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطٌۢ ٢٠ بَلْ هُوَ قُرْءَانٌۭ مَّجِيدٌۭ ٢١ فِى لَوْحٍۢ مَّحْفُوظٍۭ ٢٢      </div><br /><br /><br /><br />
      <div className="islamic-footer bg-success text-white text-center p-2 fixed-bottom">
        <p>تصميم إسلامي - جميع الحقوق محفوظة</p>
      </div>
    </div>
    
  );
}

export default App;
