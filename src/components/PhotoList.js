import React from 'react'
import {useSelector} from 'react-redux'
import {
    selectPhotos
  } from '../reducers/photoSlice';

function PhotoList() {
    const items = useSelector(selectPhotos);

    return (
        <div className="photos">
            { items[items.length-1] &&
                <img alt='' src={items[items.length-1].src} width="189" height="255"></img>
            }
            
            <ul>
                {items.map((o, index, array) => 
                    <div key={o.id}>
                        { index !== array.length-1 &&
                            <li>
                                <img alt='' src={o.src} width="200" height="200"></img>
                            </li>
                        }
                    </div>
                )}
            </ul>
        </div>
    )
}


export default PhotoList;
