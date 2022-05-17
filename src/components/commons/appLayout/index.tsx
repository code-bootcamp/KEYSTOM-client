import { ReactNode } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
interface Props {
    children: ReactNode;
}
const TIMEOUT = 100;
const getTransitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 0,
    },
};
const AppLayout = ({ children }: Props) => {
    const router = useRouter();
    return (
        <>
            {/* <div>
                <Link href="/">
                    <a>HOME</a>
                </Link>
                <Link href="/mypage">
                    <a>MY_PAGE</a>
                </Link>
                <Link href="/contact">
                    <a>CONTACT</a>
                </Link>
            </div> */}
            <TransitionGroup style={{ position: "relative" }}>
                <Transition
                    key={router.pathname}
                    timeout={{
                        enter: TIMEOUT,
                        exit: TIMEOUT,
                    }}
                >
                    {(status: any) => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </Transition>
            </TransitionGroup>
        </>
    );
};

export default AppLayout;
