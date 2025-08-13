import { useTranslation } from 'react-i18next';

interface IntroTextProps {
  className?: string;
}

const IntroText: React.FC<IntroTextProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  // Method 1: Join with line breaks and use CSS
  const intro2Joined = t('intro_2', { returnObjects: true, joinArrays: '\n' }) as string;

  // Method 2: Map over array and add <br /> elements
  const intro2Array = t('intro_2', { returnObjects: true }) as string[];

  return (
    <div className={className}>
      {/* Method 1: Using CSS white-space */}
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Method 1 - CSS white-space:</h3>
        <p className="leading-relaxed whitespace-pre-line text-gray-700">{intro2Joined}</p>
      </div>

      {/* Method 2: Using JSX mapping */}
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Method 2 - JSX mapping:</h3>
        <p className="leading-relaxed text-gray-700">
          {intro2Array.map((line, index) => (
            <span key={index}>
              {line}
              {index < intro2Array.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      {/* Method 3: Separate paragraphs */}
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Method 3 - Separate paragraphs:</h3>
        {intro2Array.map((line, index) => (
          <p key={index} className="mb-2 leading-relaxed text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IntroText;
