import Button from '../Button';
import Text from '../Text';

export default function BasicModal({
  children,
  buttonText,
  onClick,
}: {
  children: React.ReactNode;
  buttonText: string;
  onClick: () => void;
}) {
  return (
    <div className="bg-background h-[170px] w-[400px] rounded-[30px] px-10 pt-10 pb-[30px]">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Text size="title-sm" className="bold">
          {children}
        </Text>
        <Button
          variant="primary"
          className="h-[47px] w-[200px]"
          onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
