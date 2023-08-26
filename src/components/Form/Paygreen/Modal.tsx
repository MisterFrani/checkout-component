interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { isOpen, title, children } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fixed z-10 inset-0 overflow-y-auto">
      <div className="modal-overlay absolute inset-0 bg-white"></div>

      <div className="mt-10 modal-container bg-white w-11/12 md:max-w-md mx-auto  z-50 overflow-y-auto relative ">
        <div className="flex flex-col justify-between pb-3">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-center">{title}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
