import config from '~/config.json';

export const useConfig = () => {
  function getRevName(): string {
    return config.revName;
  }

  function getAssoName(): string {
    return config.assoName;
  }

  function getAssoLink(): string {
    return config.assoLink;
  }

  function getNbVoiesCyclables(): number {
    return config.nbVoiesCyclables;
  }

  function displayQuality(): boolean {
    return config.qualityDisplay;
  }

  function displayQualityOnHomePage(): boolean {
    return config.qualityDisplayOnHomePage;
  }

  return { getRevName, getAssoName, getAssoLink, getNbVoiesCyclables, displayQuality, displayQualityOnHomePage };
};
