import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
type Props = {
  error: string;
};
export const ErrorMessage = ({ error }: Props) => {
  return (
    <div>
      <Alert className="aleta">
        <div className="bola"></div>
        <div>
          <AlertTitle>Atenção!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </div>
      </Alert>
    </div>
  );
};
