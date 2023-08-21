export function TypographyTable() {
  return (
    <div className="lg:my-6 my-3 justify-center text-xs md:text-sm lg:text-lg">
      <table className="md:w-20">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Measurements
            </th>
            <th className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Small
            </th>
            <th className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Medium
            </th>
            <th className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right">
              Large
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Round Waist Width
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              48
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              30
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              33
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Round Knee Width
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              16
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              16
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              17
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Outseam Length
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              40
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              41
            </td>
            <td className="border lg:px-4 lg:py-4 md:px-4 sm:p-4 md:py-4  text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              41
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
