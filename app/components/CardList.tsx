// --- React Methods
import React from "react";

// --- Identity Providers
import {
  GoogleCard,
  EnsCard,
  PohCard,
  TwitterCard,
  PoapCard,
  FacebookCard,
  BrightidCard,
  GithubCard,
  LinkedinCard,
  DiscordCard,
  SignerCard,
  GitPOAPCard,
} from "./ProviderCards";
import { LoadingCard } from "./LoadingCard";

export type CardListProps = {
  isLoading?: boolean;
};

export const CardList = ({ isLoading }: CardListProps): JSX.Element => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-wrap md:-m-4 md:px-4">
        {isLoading ? (
          <>
            {[...Array(11)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </>
        ) : (
          <>
            <FacebookCard />
            <GoogleCard />
            <TwitterCard />
            <GithubCard />
            <LinkedinCard />
            <BrightidCard />
            <PoapCard />
            <EnsCard />
            <PohCard />
            <DiscordCard />
          </>
        )}
      </div>
    </div>
  );
};
