import { i18n } from '@/plugins';

export class Rules {
  public static required = (v: string) => !!v || i18n.t('rules.required');
}
