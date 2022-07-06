import React, { useEffect } from "react";
import { FlippingCard } from "../components/FlippingCard/FlippingCard";
import { Panel } from "../components/Panel/Panel";
import { MoreCard } from "../components/MoreCard/MoreCard";
import { FaTag } from "react-icons/fa";
import { LiveFeed } from "../components/LiveFeed/LiveFeed";
import { Layout } from "../components/Layout/Layout";
export const Home = () => {
  useEffect(() => {
    document.title = "Home - GrabPoints";
  }, []);

  return (
    <>
      <Layout>
        <Panel title={"Answer Surveys and Earn"}>
          <FlippingCard
            subtitle="Earn up to $10 / 10,000 points for each survey completion. Ensure that your birthdate, gender and zip are completed in your profile in order to..."
            img="/media/panel/cint.png"
            backColor="bg-lime-500"
            title="CINT Wall"
            description="Earn up to $10 / 10,000 points for each survey completion. Ensure that your birthdate, gender and zip are completed in your profile in order to..."
          />
          <FlippingCard
            subtitle="Earn up to $10 / 10000 points for each survey completion. Ensure that your profile is completed to see available surveys. Complete unlimited times daily."
            img="/media/panel/peanutlabs.png"
            backColor="bg-lime-500"
            title="PeanutLabs"
            description="Earn up to $10 / 10000 points for each survey completion. Ensure that your profile is completed to see available surveys. Complete unlimited times daily."
          />
          <FlippingCard
            subtitle="Earn up to $3 / 3000 points for each survey completion. Shorter surveys pay less, longer surveys pay more."
            img="/media/panel/yuno.png"
            backColor="bg-lime-500"
            title="Yuno Survey Wall"
            description="Earn up to $3 / 3000 points for each survey completion. Shorter surveys pay less, longer surveys pay more."
          />
          <FlippingCard
            subtitle="Earn up to $5 / 5000 points for each survey completion and get paid for disqualifications / partial completions. Complete your profiler and see all the..."
            img="/media/panel/cpx.png"
            backColor="bg-lime-500"
            title="CPX Research"
            description="Earn up to $5 / 5000 points for each survey completion and get paid for disqualifications / partial completions. Complete your profiler and see all the..."
          />
          <FlippingCard
            subtitle="Complete easy 1-10 minute surveys and earn points!"
            img="/media/panel/pollfish.png"
            backColor="bg-lime-500"
            title="Pollfish"
            description="Complete easy 1-10 minute surveys and earn points!"
          />
          <MoreCard
            icon={<FaTag fontSize={64} />}
            color="white"
            bgColor="bg-green-500"
            title="More Surveys"
            subtitle="View all available survey walls and routers."
          />
        </Panel>
        <Panel title={"Offer Walls"}>
          <FlippingCard
            subtitle="Earn points by downloading apps, completing trials & joining sites."
            img="/media/panel/adgatemedia.png"
            backColor="bg-sky-500"
            title="AdGate"
            description="Earn points by downloading apps, completing trials & joining sites."
          />
          <FlippingCard
            subtitle="Download games, complete offers and more!"
            img="/media/panel/ayetstudios.jpeg"
            backColor="bg-sky-500"
            title="AyetStudios"
            description="Download games, complete offers and more!"
          />
          <FlippingCard
            subtitle="Earn points by watching videos, completing offers and more!"
            img="/media/panel/offertoro.png"
            backColor="bg-sky-500"
            title="OfferToro"
            description="Earn points by watching videos, completing offers and more!"
          />
          <FlippingCard
            subtitle="Watch videos, complete offers, download apps & more!"
            img="/media/panel/adscendmedia.png"
            backColor="bg-sky-500"
            title="AdWall"
            description="Watch videos, complete offers, download apps & more!"
          />
          <FlippingCard
            subtitle="Earn points when you complete offers."
            img="/media/panel/revenueuniverse.jpeg"
            backColor="bg-sky-500"
            title="Revenue Universe"
            description="Earn points when you complete offers."
          />
          <FlippingCard
            subtitle="Download games, complete offers and surveys!"
            img="/media/panel/wannads.webp"
            backColor="bg-sky-500"
            title="WannAds"
            description="Download games, complete offers and surveys!"
          />
        </Panel>
        <Panel title={"Do Special Offers and Earn"}>
          <FlippingCard
            subtitleIcon="/media/icons/gp-icon.webp"
            subtitle="Earn $14.30 / 14300"
            img="/media/panel/mafiacity_war_of.png"
            backColor="bg-sky-500"
            title="Mafia City - Android"
            description="Play and reach mansion level 20 within 40 days."
          />
          <FlippingCard
            subtitleIcon="/media/icons/gp-icon.webp"
            subtitle="Earn $7.15 / 7150"
            img="/media/panel/kingofavalon.jpeg"
            backColor="bg-sky-500"
            title="King of Avalon: Dragon Warfare"
            description="Play and reach city level 21."
          />
          <FlippingCard
            subtitleIcon="/media/icons/gp-icon.webp"
            subtitle="Earn $5.50 / 5500"
            img="/media/panel/gogreen.png"
            backColor="bg-sky-500"
            title="Go Green - Android"
            description="Play the game until you reach depth of 3000 meters."
          />
          <MoreCard
            icon={<FaTag fontSize={64} />}
            color="white"
            bgColor="bg-sky-500"
            title="More Offers"
            subtitle="View all offers available in your country."
          />
        </Panel>
        <LiveFeed />
      </Layout>
    </>
  );
};
