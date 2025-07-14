import { ModeToggle } from '@/components/ui/ModeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

import SidebarLayout from '../SideBarLayout/sidebar-layout';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getIntervalFromLocalStorage,
  setIntervalToLocalStorage,
} from '@/lib/mock-data';
import { useState } from 'react';

export const SettingForm = () => {
  const [interval, setInterval] = useState(getIntervalFromLocalStorage());
  return (
    <SidebarLayout>
      <main className="w-full p-6 relative">
        <SidebarTrigger className="m-3 absolute top-0 left-0 md:hidden" />
        <div className="m-3 absolute top-0 right-0">
          <ModeToggle />
        </div>

        <Card className="w-full mt-10 md:p-10 p-7">
          <CardHeader>
            <CardTitle>ローディング時間 (ms)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2 mb-4">
              <p>{interval} ms</p>
            </div>
            <Slider
              max={10000}
              step={1000}
              defaultValue={[interval]}
              onValueChange={(value) => {
                setInterval(value[0]);
                setIntervalToLocalStorage(value[0]);
              }}
            />
          </CardContent>
        </Card>
      </main>
    </SidebarLayout>
  );
};
