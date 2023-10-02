import { Link } from "react-router-dom";

import useModal from "@hooks/useModal";
import useModalSetter from "@hooks/useModalSetter";

import Button from "@components/Button/Button";
import CloseIcon from "@components/Icons/CloseIcon";
import ModalLayout from "@components/Layout/ModalLayout";
import CenterSection from "@components/Section/CenterSection";

const Modal = () => {
  const { isModalOpen } = useModal();
  const { setIsModalOpen } = useModalSetter();

  return (
    <>
      {isModalOpen && (
        <ModalLayout>
          <div className="max-w-xl w-full bg-[#f4f4ff] px-12 xs:px-6">
            <div className="text-right">
              <button
                className="cursor-pointer w-8 h-8 sm:w-6 sm:h-6 mt-12 text-primary"
                onClick={() => setIsModalOpen((prev) => !prev)}
              >
                {<CloseIcon />}
              </button>
            </div>
            <div className="text-center">
              <div>
                <img
                  src="/assets/svg/success-kite.svg"
                  alt="A success kite"
                  className="w-40 h-40 mx-auto mb-4 -mt-8"
                />
                <p>
                  Your link has been sent to{" "}
                  <span className="text-primary break-words">
                    davearonmwan@gmail.com
                  </span>
                </p>
              </div>
              <div>
                <CenterSection className="py-12">
                  <div>
                    <p className="mb-6 text-gray-600">
                      Want to view this video later? Save to your account now!
                    </p>
                    <Button className="btn-primary">Save video</Button>

                    <p className="mt-6 text-xxs text-gray-500">
                      Don&apos;t have an account?{" "}
                      <Link to="/" className="text-primary font-semibold">
                        Create account
                      </Link>
                    </p>
                  </div>
                </CenterSection>
              </div>
            </div>
          </div>
        </ModalLayout>
      )}
    </>
  );
};

export default Modal;
