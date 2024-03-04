'use client'

import YouTube from 'react-youtube'

type VideoType = {
  title: string,
  urlId: string,
}

const videos: VideoType[] = [
  { title: 'Resuscytacja krążeniowo-oddechowa', urlId: 'M6dhrU2NbHk' },
  { title: 'Pozycja boczna bezpieczna', urlId: 'o0KutNaPk8c' },
  { title: 'Resuscytacja (RKO) niemowląt', urlId: '9Nl9CDRkiBc' },
  { title: 'Resuscytacja (RKO) dzieci', urlId: 'tyJOeQZ-Qs8' },
  { title: 'Zachowanie podczas omdlenia', urlId: 'ciHPbH1QSR0' },
  { title: 'Zakrztuszenie u osoby dorosłej', urlId: 'FN9Fx4JU56Y' },
  { title: 'Zakrztuszenie u dziecka/niemowlęcia', urlId: 'c4EG8UCrNaY' },
  { title: 'Wstrząs anafilaktyczny', urlId: 'qeOi3Uk6sls' },
  { title: 'Drgawki i napady padaczkowe', urlId: 'rx3azY6ls2M' },
  { title: 'Porażenie pradem elektrycznym', urlId: 'DUC-AF5bosM' },
  { title: 'Ratowanie tonącego i samego siebie', urlId: 'UuDGhLquqkA' },
  { title: 'Przykładowe postępowanie przy złamaniu', urlId: 'bTrA_AhnSaM' },
  { title: 'Skręcenie kostki', urlId: 'TLQcoCl2m5I' },
  { title: 'Powstrzymywanie krwotoku', urlId: 'NRiZYreI_Lw' },
  { title: 'Jak zatamować krwotok z nosa', urlId: 'ryXRpzjaQdA' },
  { title: 'Zatrucia pokarmowe', urlId: 'beIjL53Ptog' },
  { title: 'Zatrucie czadem', urlId: 'W5p4x4QWvfM' },
  { title: 'Cukrzyca', urlId: '5Y2HKTGZ10o' },
  { title: 'Udar mózgu', urlId: 'jEyOnE4cyEE' },
  { title: 'Oparzenia termiczne', urlId: 'U0iA6ZbJyO4' },
  { title: 'Hipotermia', urlId: '5NOHxD6-4b8' },
  { title: 'Odmrożenia', urlId: 'n0VO6wr5Smw' },
  { title: 'Zawał serca', urlId: 'heIoV1sc8Fw' },
  { title: 'Wyposażenie apteczki', urlId: 'BoMrLluiVQ4' },
]

const Filmy = () => {
  return (
    <div className='flex flex-col my-8 text-2xl md:text-3xl lg:text-4xl'>
      <div className='text-center p-4'>
        <p className='underline my-4'>
          Przydatne filmy przy nauce pierwszej pomocy:
        </p>
        <p>
          Filmy o pierwszej pomocy mogą być skutecznym narzędziem edukacyjnym, które wizualizują procedury ratujące życie.
          Przez demonstrację praktycznych umiejętności wspomagają one naukę, oraz umożliwiają cykliczne przypominanie o istotności posiadania podstawowej wiedzy z zakresu pierwszej pomocy.
          W rezultacie, stają się one skutecznym środkiem przygotowującym społeczeństwo do reakcji w sytuacjach awaryjnych. W poniższych filamch znajdą państwo zarówno kanały na platofmie
          YouTube poświęcone tematyce pierwszej pomocy, jak i wyszukane filmy z gotowymi poradami medycznymi.
        </p>
      </div>

      <div className='flex flex-wrap justify-center'>
        { videos && videos.map(v => <YouTubeVideoFrame key={v.urlId} video={v} />)}
      </div>

    </div>
  )
}

const YouTubeVideoFrame = ({ video }: { video: VideoType }) => {
  return (
    <div className='bg-red-400 p-4 m-4 rounded-xl'>
      <p className='pb-4 underline'>{video.title}</p>
      <YouTube
        videoId={video.urlId}
        opts={{ height: '390', width: '650', playerVars: { autoplay: 0 } }}
      />
    </div>
  )
}

export default Filmy

{/* <div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Zakrztuszenie u dziecka/niemowlęcia </p>
  <YouTube videoId="c4EG8UCrNaY"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Wstrząs anafilaktyczny </p>
  <YouTube videoId="qeOi3Uk6sls"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Drgawki i napady padaczkowe </p>
  <YouTube videoId="rx3azY6ls2M"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Porażenie pradem elektrycznym </p>
  <YouTube videoId="DUC-AF5bosM"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Ratowanie tonącego i samego siebie </p>
  <YouTube videoId="UuDGhLquqkA"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Przykładowe postępowanie przy złamaniu </p>
  <YouTube videoId="bTrA_AhnSaM"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Skręcenie kostki  </p>
  <YouTube videoId="TLQcoCl2m5I"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Powstrzymywanie krwotoku</p>
  <YouTube videoId="NRiZYreI_Lw"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Jak zatamować krwotok z nosa</p>
  <YouTube videoId="ryXRpzjaQdA"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Zatrucia pokarmowe</p>
  <YouTube videoId="beIjL53Ptog"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Zatrucie czadem</p>
  <YouTube videoId="W5p4x4QWvfM"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Cukrzyca</p>
  <YouTube videoId="5Y2HKTGZ10o"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Udar mózgu</p>
  <YouTube videoId="jEyOnE4cyEE"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Oparzenia termiczne</p>
  <YouTube videoId="U0iA6ZbJyO4"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Hipotermia</p>
  <YouTube videoId="5NOHxD6-4b8"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Odmrożenia</p>
  <YouTube videoId="n0VO6wr5Smw"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 m-4 rounded-xl'>
  <p className='pb-4 underline'>Zawał serca</p>
  <YouTube videoId="heIoV1sc8Fw"
  opts={opts} onReady={this._onReady} />
</div>


<div className='bg-red-400 p-4 px-24 m-4 rounded-xl'>
  <p className='pb-4 underline'>Wyposażenie apteczki</p>
  <YouTube videoId="BoMrLluiVQ4"
  opts={opts} onReady={this._onReady} />
</div>

<div className='bg-red-400 p-4 px-24 m-4'>
  <p className='pb-4 underline'>RUPUPUPUPUPUPU</p>
  <YouTube videoId="stZRFhO_HGs"
  opts={opts} onReady={this._onReady} />
</div> */}