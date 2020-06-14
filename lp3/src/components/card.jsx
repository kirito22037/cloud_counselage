import React , { useState , useEffect }from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import axios from 'axios';

const Card =(props)=>{
    
    const [title,setTitle] = useState(null);
    const [data,setData] = useState(null);

    const fetchData = ()=>{
        axios.get(props.url)
        .then(res=>{
            console.log("result data : ",res.data);
            setTitle(res.data.title);
            setData(res.data.data);
        })
        .catch(err=>{
            console.log("error : ",err);
        });
    };

    //------------as componentDidMount()----------------------------------
    useEffect(() => {
        fetchData();
    },[]);

    //-------------------style for link---------------------------------
    const styleLink={
        color : "#ffea00",
        cursor : "pointer"
    };

    return(
        <div className="col s12 l6">
            <div className="card  light-green darken-3">
                <div className="card-content white-text">
                    <SkeletonTheme color="#0288d1" highlightColor="#01579b">
                    <span className="card-title">
                        { title || <Skeleton/> } 
                    </span>
                    <p>{ data || <Skeleton/> }</p>
                    </SkeletonTheme>
                </div>
                <div className="card-action" >
                <a onClick={ fetchData } style={styleLink} >Refresh</a>
                </div>
            </div>
        </div>

    );
};

export default Card;