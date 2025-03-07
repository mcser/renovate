import { GitTagsDatasource } from '../../datasource/git-tags';
import { HelmDatasource } from '../../datasource/helm';
export { extractPackageFile } from './extract';

export const displayName = 'Argo CD';
export const url = 'https://argo-cd.readthedocs.io/';

export const defaultConfig = {
  fileMatch: [],
};

export const supportedDatasources = [GitTagsDatasource.id, HelmDatasource.id];
