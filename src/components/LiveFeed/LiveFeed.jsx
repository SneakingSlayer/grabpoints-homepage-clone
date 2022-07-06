import React, { useState, useEffect } from "react";
import { LiveFeedCard } from "../LiveFeedCard/LiveFeedCard";
import rotate from "rotate-array";
export const LiveFeed = () => {
  const [liveFeed, setLiveFeed] = useState([]);
  const [counter, setCounter] = useState(0);
  const fetchLiveFeed = () => {
    fetch("./live_feed_response_ver2.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLiveFeed(data);
      });
  };

  useEffect(() => {
    fetchLiveFeed();
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (counter > 60) {
        setCounter(1);
        return;
      } else {
        setCounter(counter + 1);
      }
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return (
    <div className="pb-[35px] mb-[50px] ">
      <div className="flex items-center space-x-2 mb-[15px] flex-wrap">
        <h2 className="font-semibold text-2xl ">{"Live Feed"}</h2>
        <a href="#" className="underline font-semibold text-gray-500">
          View All {" >"}
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex flex-wrap ">
        {rotate(liveFeed?.slice(0, 10), counter)?.map((feed, idx) => (
          <LiveFeedCard
            key={idx}
            imgUrl={feed.imageUrl}
            title={feed.title}
            userInitials={feed.userInitials}
            description={feed.description}
            points={feed.points}
            flag={feed.flag}
            date={feed.date}
          />
        ))}
      </div>
    </div>
  );
};
