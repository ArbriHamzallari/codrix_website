import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export default function Home() {
  return <HomeSections dict={getDict('sq')} />;
}
