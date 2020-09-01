import React,{useEffect,useContext,useState} from 'react'
import axios from 'axios'
import './List.scss'
import {ListHeader} from '../list-header/ListHeader'
import { DataContext } from '../../context/dataContext'
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import Moment from 'react-moment';
import uuid from 'react-uuid'
import { LoadingContext } from '../../context/LoadingContext';

export const List = () => {
    const {data,setData,filteredData,setFilteredData} = useContext(DataContext)
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
  `;
    const {loading,setLoading} = useContext(LoadingContext)

    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'api/user',
          );
          setLoading(false)
          setData(result.data);
        };
     
        fetchData();
        
      }, []);

    return (
        //TODO: Implement editing feature
        <div className="list">
            <ListHeader />
            <div className="item-list">
              <div className="sweet-loading">
                <PuffLoader
                  css={override}
                  size={100}
                  color={"#123abc"}
                  loading={loading}
                />
              </div>
            {filteredData.map((item)=> {
                return (
                    <div className="item" key={uuid()}>
                        <div className="initials">{item.initials}</div>
                        <div className="section-name">
                            <div className="name">{item.name}</div>
                            <div className="last-edited">Last Edited: <Moment format="YYYY/MM/DD">{item.lastedited}</Moment></div>
                        </div>
                        <div className="p-section">
                            <div className="p-title"><a href={`tel:${item.phone}`} >{item.phone}</a></div>
                            <div className="p-label">Phone no.</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.chest}</div>
                            <div className="label">Chest</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.shoulder}</div>
                            <div className="label">Shoulder</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.sleeves}</div>
                            <div className="label">Sleeve</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.armhole}</div>
                            <div className="label">Armhole</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.lengthKurti}</div>
                            <div className="label">Length (Kurti)</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.waistKurti}</div>
                            <div className="label">Waist (Kurti)</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.hipsKurti}</div>
                            <div className="label">Hips (Kurti)</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.lengthPant}</div>
                            <div className="label">Length (Pant)</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.waistPant}</div>
                            <div className="label">Waist (Pant)</div>
                        </div>
                        <div className="section">
                            <div className="title">{item.hipsPant}</div>
                            <div className="label">Hips (Pant)</div>
                        </div>
                
                    </div>
                )
            })}
            </div>
        </div>
    )
}

