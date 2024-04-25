import style from './RatingRecipe.module.scss';
import Row from '../../shared-components/Row/Row';
import RatingStars from '../../shared-components/RatingStars/RatingStars';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function RatingRecipe() {
    const datas = [
        { id:'very-berry',title: 'Very berry Healthy Summer Smoothie', image: '/ratedRecipes/very-berry.png', rating: '' },
        { id:'ginger',title: 'Carrot and ginger soup', image: '/ratedRecipes/carrot-ginger.png', rating: '' },
        { id:'loaded-berry',title: 'Loaded mixed berries Minitart', image: '/ratedRecipes/loaded-berry.png', rating: '' },

    ]
    const [data,setData]=useState(datas)
    const [userrr, setUser] = useState({});

    const userI = useSelector((state) => state?.auth?.user);
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/users');
            const users =  await response.json();
            const userLog = users.filter(u => u.user?.email === userI);
            setUser(userLog)

            if (userLog) {
                setData((prevDatas) => {
                    return prevDatas.map((data) => {
                      return {
                        ...data,
                        rating: userLog[0]?.user?.ratings?.[0][data.id] || '', 
                      };
                    });
                  });
            }
          } catch (error) {
            console.log('error');
          }
        };
    
        fetchData();} ,[userI])

    const handleRatingChange = async (id,newRating) => {
        const userToUpdate = userrr[0];
        let updatedUser = { ...userToUpdate };
        updatedUser.user.ratings[0][id] = newRating;

        try {
            
            const response = await axios.put(
              `http://localhost:3001/users/${userrr[0].id}`,
         updatedUser
            );
        
            if (response.status === 200) {
              const updatedData = data.map(item => {
                if (item.id === id) {
                  return { ...item, rating: newRating };
                }
                return item;
              });
              setData(updatedData);
              console.log('Rating updated successfully!');
            } else {
              console.error('Error updating rating:', response);
            }
          } catch (error) {
            console.error('Error:', error);
          }
    //   setRating(newRating);
    };
    return (
        <Row>

            <div className="row custom-gutter">
                {data.map((card, index) => {
                    return <div key={index} className={`col-md-4 col-sm-12 ${style.card}`} >
                        <div className='h-100' style={{ position: 'relative' }}>
                            <img alt="card" src={card.image} className="card-img-top img-fluid"/>
                            <RatingStars id={card.id} initialRating={card.rating} onRatingChange={handleRatingChange} />
                            <div className={style.title}>{card.title}</div>

                        </div>
                    </div>
                })
                }
            </div>

        </Row>
    );
}

export default RatingRecipe;
