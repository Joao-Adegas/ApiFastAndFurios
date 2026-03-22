import { useState,useEffect,useRef } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import reactLogo from './assets/react.svg'
import Modal from '../components/Modal/Modal'
import axios from 'axios'
import './App.scss'
import 'swiper/css'
import 'swiper/css/navigation'



function App() {
  const [carros, setCarros] = useState([]);
  const [currentIndex, setcurrentIndex] = useState([]);
  const [modalOpen,setModalOpen] = useState([])
  const [editing,isEditing] = useState(false)


  const CarroRef = useRef()
  const corRef = useRef()
  const motorRef = useRef()
  const quemDirigiuRef = useRef()
  const imgRef = useRef()


  const openCreateModal = () => {
    isEditing(false)
    setModalOpen(true)
  }

  const closeModal = () => {
    isEditing(false)
    setModalOpen(false)
  }

  const searchCarros = () =>{
    axios.get("http://127.0.0.1:3000/api/v1/carros/")
    .then(response => {
      setCarros(response.data);
    })
    .catch(error => {
      console.error("Erro ao buscar os carros:", error);
    });
  }

  const CreateEdit = () => {
    const formData = {
  
      carro:CarroRef.current.value,
      cor:corRef.current.value,
      motor:motorRef.current.value,
      QuemDirigiu:quemDirigiuRef.current.value,
      img:imgRef.current.value

    }

    
    
    axios.post("http://127.0.0.1:3000/api/v1/carros/",formData,{
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((r) => {
        setCarros(r.data);
    })
    .catch(error => {
      console.error("Erro ao criar carro:",error)
    })
  }


  useEffect(() => {
    searchCarros()
  }, []);

  

  return (
    
    <div className='container'>
      <div className="btn-container">

        <button onClick={openCreateModal} className='btn'>Criar</button>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }} 
        navigation={true}
        autoplay={true}
      >
        {carros.map((carro) => (
          <>
            <SwiperSlide key={carro.id}>
              <div className="inf">
                <h1>{carro.id}</h1>

                <div className="slide-item">
                  <img src={carro.img} alt={carro.img} />
                  <div className="border-animation"></div>
                </div>

                <div className="inf infLeft">
                  <div className="Personagem">
                    <span>{carro.QuemDirigiu}</span>
                  </div>

                  <div className="nome">
                    <span>{carro.carro}</span>
                  </div>

                  <div className="motor">
                    <span>{carro.motor}</span>
                  </div>
                
                <button onClick={openCreateModal} className='btn btn-edit'>EDITAR</button>

                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>  

        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          className="custom-modal" 
          overlayClassName="custom-overlay" 
          ariaHideApp={false}>

          <form onSubmit={(e) => { e.preventDefault(); CreateEdit(); }}>

            <label>
              Digite o nome do carro:
              <input type="text" name="" ref={CarroRef} id="" />
            </label>

            <label>
                Digite a cor do carro:
                <input type="text"  ref={corRef}/>
            </label>

            <label>
              Digite o motor do carro:
              <input type="text" ref={motorRef} name="" id="" />
            </label>

            <label>
              Digite quem dirigiu o carro:
              <input type="text" ref={quemDirigiuRef} />
            </label>

            <label>
              Insira a Imagem do carro:
              <input type="text" ref={imgRef} />
            </label>

            <button type="submit">Cadastrar</button>
    
          </form>

        </Modal>
          
      </div>
  );
}

export default App
