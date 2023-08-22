export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* account에서 로그인 상태를 확인해주는 함수를 호출 */}
      {children}
    </div>
  );
}
