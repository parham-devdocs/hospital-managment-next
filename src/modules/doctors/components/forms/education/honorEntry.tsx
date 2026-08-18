import Input from "@/src/shared/components/form/controllers/general";
import { Plus } from "lucide-react";
import { Control, useFieldArray } from 'react-hook-form';

interface HonorEntryProps {
  errors: any;
  index: number;
  control: any;
}

const HonorEntry = ({ errors, index, control }: HonorEntryProps) => {
  const {
    fields: honorFields,
    append: appendHonor,
    remove: removeHonor,
  } = useFieldArray({
    control,
    name: `education.${index}.honors` as any,
  });

  const honorErrors = errors?.education?.[index]?.honors;

  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <h4 className="text-blue-600 text-lg font-semibold mb-3 flex items-center gap-2">
        🏅 Honors
      </h4>

      <div className="space-y-3">
        {honorFields.map((honorField, honorIndex) => (
          <div
            key={honorField.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-gray-50 p-3 rounded-md border border-gray-200"
          >
            <div className="flex-1 w-full">
              <Input
                control={control}
                fieldLabel={`Honor #${honorIndex + 1}`}
                fieldName={`education.${index}.honors.${honorIndex}`}
              />
              {honorErrors?.[honorIndex]?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {honorErrors[honorIndex].message}
                </p>
              )}
            </div>

            {honorFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeHonor(honorIndex)}
                className="px-3 py-1.5 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200 border border-red-200 hover:border-red-300 whitespace-nowrap"
              >
                ✕ Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {honorErrors?.root?.message && (
        <p className="text-red-500 text-sm mt-2 font-medium">
          ⚠️ {honorErrors.root.message}
        </p>
      )}

      <button
        type="button"
        onClick={() => appendHonor('')}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
       <Plus/>
        Add Honor
      </button>
    </div>
  );
};

export default HonorEntry;