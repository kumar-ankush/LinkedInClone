import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Widgets = () => {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
                        


        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Breaking News Ankush Kumar is The Richest Person on Planet","Top News -100M Readers")}
            {newsArticle("First Indian Official Social Professional Site,by Ankush Kumar","Top News -3M Readers")}
            {newsArticle("Covid new Mutation is Expanding Rapidly,by BBC","Top News -5M Readers")}
            {newsArticle("Tesla Bought Apple,by CNN","Top News -30M Readers")}
            {newsArticle("Tesla is ready to dispatch Human civilization is space,by Elon Musk","Top News -300M Readers")}
            {newsArticle("Covid Mutation cure is developed by India","Top News -100M Readers")}
        </div>
    );
}

export default Widgets;
