import Card from './Components/Card'
import {images} from './assets/imort'
const App=()=>{
  return(
    <div className='h-full bg-amber-200 p-2'>
      
      <div className=' grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 '>
      <Card  title='picture' discription='the picture about anime' imgUrl={images.img1} />
       <Card  title='Porsche' discription='porsche gt3 rs 911' imgUrl={images.img2}/>
       <Card  title='setup' discription='Sofware engineers fav setup' imgUrl={images.img3}/>
       <Card  title='Eren & mikasa' discription='AOT Eren & mikasa' imgUrl={images.img4}/>
       <Card  title='Anime' discription='katana Swords Man' imgUrl={images.img5}/>
      </div>

    </div>
  )
}

export default App