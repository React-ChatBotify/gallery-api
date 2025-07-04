import { runProcessThemeQueue } from './processQueuedThemes';
import { runSyncPluginsFromNpm } from './syncPluginsFromNpm';
import { runSyncThemesFromGitHub } from './syncThemesFromGitHub';

// on initial start, always sync
void runSyncThemesFromGitHub();
void runSyncPluginsFromNpm();

// todo: ideally a cronjob should be used to only spin up job pod when required
// but nvm this is good enough for now
setInterval(() => void runProcessThemeQueue(), 900000);
setInterval(() => void runSyncThemesFromGitHub(), 86400000);
setInterval(() => void runSyncPluginsFromNpm(), 86400000);
