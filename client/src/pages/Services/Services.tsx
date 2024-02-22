import RepairPreview from "../../components/Repair/RepairPreview";
import Tuning from "../../components/Tuning/Tuning";
import PriceList from "../../components/PriceList/PriceList";
import PriceWorking from "../../components/PriceWorking/PriceWorking";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import Menu from "../../components/Menu/Menu";

const Services = () => {
  return (
    <div>
      <Menu />
      <RepairPreview />
      <PriceList />
      <Tuning />
      <PriceWorking />
      <WorkingHours />
    </div>
  );
};

export default Services;
