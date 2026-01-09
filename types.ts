export type ViewState = 'SELECT' | 'PEACE' | 'WAR';

export interface ViewProps {
  currentView: ViewState;
  changeView: (view: ViewState) => void;
}

export interface InputSource {
  id: string;
  label: string;
}