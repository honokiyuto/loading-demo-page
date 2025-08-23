import { HalfBlankCommon } from './HalfBlankCommon';
import { ProgressBarScreen } from './ProgressBarScreen';

export const BlankProgressBarScreen = () => {
  return (
    <HalfBlankCommon>
      <ProgressBarScreen isHalf />
    </HalfBlankCommon>
  );
};
